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

  deletar() {
    console.log('Deletando item...');

  }

  // Função para cadastrar uma nova empresa
    cadastrarEmpresa() {
    this.showForm = true;
    this.isEditMode = false;
    this.formData = {empresaId: 0, cnpj: '', nome: '', cep: '' }; 
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
  }
}
