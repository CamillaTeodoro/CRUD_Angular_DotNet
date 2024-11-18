import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Empresa } from '../../models/empresa.model';

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.scss']
})
export class EmpresaComponent {
  searchQuery: string = '';
  showForm = false;
  isEditMode = false;
  formData: Empresa = {
    empresaId: 0,
    cnpj: '',
    nome: '',
    cep: ''
  };
  editCnpj: string = '';
  showCnpjInput = false;
  showList = false;
  isDeleting = false;
  empresas: Empresa[] = [];
  displayedColumns: string[] = ['cnpj', 'nome', 'cep'];

  constructor(private http: HttpClient) {}

  // Função de busca
  buscar() {
    console.log('Buscando por:', this.searchQuery); 
    this.isEditMode = false; 
    const params: any = {};
    if (this.isCNPJ(this.searchQuery)) {
      params.cnpj = this.searchQuery;
    } else {
      params.nome = this.searchQuery;
    }

    this.http
      .get<Empresa | Empresa[]>('/api/empresas/search', { params })
      .subscribe(
        (response: any) => {
          if (Array.isArray(response)) {
            if (response.length > 0) {
              this.empresas = response;
            } else {
              alert('Nenhuma empresa encontrada.');
            }
          } else {
            // Se a resposta for uma única empresa
            this.empresas = [response];
          }
        },
        (error) => {
          console.error('Erro ao buscar empresa', error);
          alert('Erro ao buscar empresa');
        }
      );
  }

  isCNPJ(query: string): boolean {
    return query.length === 14 && !isNaN(Number(query));
  }

  deletar(): void {
    this.showCnpjInput = true; 
    this.editCnpj="";
    this.isDeleting = true; 
    this.showForm = false;
    this.showList = false;
  }

  deletarEmpresaPorCnpj(){
    if (!this.editCnpj || this.editCnpj.length !== 14) {
      alert('Por favor, insira um CNPJ válido.');
      return;
    }

    this.http.delete(`/api/empresas/${this.editCnpj}`).subscribe(
      () => {
        alert('Empresa deletada com sucesso!');
        this.showCnpjInput = false; 
      },
      (error) => {
        console.error('Erro ao deletar empresa:', error);
        if (error.status === 404) {
          alert('Empresa não encontrada.');
        } else {
          alert('Erro ao deletar empresa. Tente novamente mais tarde.');
        }
      }
    );
    this.editCnpj = '';
  }

  // Função para cadastrar uma nova empresa
    cadastrarEmpresa() {
    this.showForm = true;
    this.showCnpjInput = false;
    this.isEditMode = false;
    this.showList = false;
    this.formData = {empresaId: 0, cnpj: '', nome: '', cep: '' }; 
    }
  
    editarEmpresa() {
      this.showList = false;
      this.showCnpjInput = true;
      this.showForm = false;
    }
  
    // Buscar empresa por CNPJ após digitar
    buscarEmpresaPorCnpj() {
      if (!this.isCNPJ(this.editCnpj)) {
        alert('CNPJ inválido!');
        return;
      }
  
      this.http.get<Empresa>('/api/empresas/search', { params: { cnpj: this.editCnpj } }).subscribe(
        (response: any) => {
          if (response) {
            this.formData = response; 
            this.isEditMode = true; 
            this.showForm = true; 
            this.showCnpjInput = false; 
          } else {
            alert('Empresa não encontrada.');
          }
        },
        (error) => {
          console.error('Erro ao buscar empresa', error);
          alert('Erro ao buscar empresa');
        }
      );
    }

  cadastrarFornecedor() {
    this.showForm = true;
    this.isEditMode = false;
    this.formData = {empresaId: 0, cnpj: '', nome: '', cep: '' }; 
  }

  // Função para listar fornecedores
  listarFornecedores() {
    console.log('Listando fornecedores...');
   
  }

  // Função para listar empresas
  listarEmpresas() {
    this.showForm = false;
    this.showList = true;
    this.showCnpjInput = false;
    this.http.get<Empresa[]>("/api/empresas").subscribe(
      (response) => {
        console.log('Empresa listada com sucesso!', response);
        this.empresas = response;
      },
      (error) => {
        console.error('Erro ao buscar empresa:', error);
      }
    );;

  }

  // Função para salvar dados

  salvar(): void {
    if (this.isEditMode) {
      this.editar();
    } else {
      this.cadastrar();
    }
    this.formData = {empresaId: 0, cnpj: '', nome: '', cep: '' };
  }
  cadastrar() {
      this.http.post<Empresa>("/api/empresas", this.formData)
      .subscribe(
        (response) => {
          alert("Empresa cadastrada com sucesso!");
          console.log('Empresa cadastrada com sucesso!', response);
        },
        (error) => {
          console.error('Erro ao cadastrar empresa:', error);
        }
      );
  }

  editar(): void {
    console.log('Edição de empresa', this.formData);
    this.http.put<Empresa>(`/api/empresas/${this.formData.empresaId}`, this.formData)
      .subscribe(
        (response) => {
          alert("Empresa atualizada com sucesso!");
          console.log('Empresa atualizada com sucesso!', response);
        },
        (error) => {
          console.error('Erro ao atualizar empresa:', error);
        }
      );
  }
}
