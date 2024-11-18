import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Fornecedor } from '../../models/fornecedor.model';

@Component({
  selector: 'app-fornecedores',
  templateUrl: './fornecedores.component.html',
  styleUrls: ['./fornecedores.component.scss']
})
export class FornecedoresComponent {
  searchQuery: string = '';
  showForm = false;
  isEditMode = false;
  formData: Fornecedor = {
    fornecedorId: 0,
    identificador: "",
    tipo: "",
    nome: "",
    email: "",
    cep: "",
    rg: "",
    dataNascimento: new Date(0)
  };
  editCnpj: string = '';
  showCnpjInput = false;
  showList = false;
  isDeleting = false;
  fornecedores: Fornecedor[] = [];
  displayedColumns: string[] = ['identificador', "tipo",'nome',"email", 'cep',"rg","dataNascimento"];

  constructor(private http: HttpClient) {}

  buscar() {
    
  }

  isCNPJ(query: string): boolean {
    return query.length === 14 && !isNaN(Number(query));
  }

  deletar(): void {
    
  }

  deletarFornecedorPorCnpj(){
   
  }

  // Função para cadastrar uma nova fornecedor
  cadastrarFornecedor() {
    this.showForm = true;
    this.showCnpjInput = false;
    this.isEditMode = false;
    this.showList = false;
    this.formData = {fornecedorId: 0, identificador: '', tipo: '', nome: '',email: '', cep: '', rg: '', dataNascimento: new Date(0) };
    }
  
  editarFornecedor() {
     
    }
  
  // Buscar fornecedor por CNPJ após digitar
  buscarFornecedorPorCnpj() {
     
    }

  // Função para listar fornecedores
  listarFornecedores() {
    console.log('Listando fornecedores...');
    this.showForm = false;
    this.showList = true;
    this.showCnpjInput = false;
    this.http.get<Fornecedor[]>("/api/fornecedores").subscribe(
      (response) => {
        console.log('Fornecedores listados com sucesso!', response);
        this.fornecedores = response;
      },
      (error) => {
        console.error('Erro ao buscar fornecedores:', error);
      }
    );;
   
  }

  // Função para listar empresas
  listarEmpresas() {
    
  }

  // Função para salvar dados

  salvar(): void {
    if (this.isEditMode) {
      this.editar();
    } else {
      this.cadastrar();
    }
    this.formData = {fornecedorId: 0, identificador: '', tipo: '', nome: '',email: '', cep: '', rg: '', dataNascimento: new Date(0) };
  }
  cadastrar() {
    console.log(this.formData);
    this.http.post<Fornecedor>("/api/fornecedores", this.formData)
    .subscribe(
      (response) => {
        alert("Fornecedor cadastrado com sucesso!");
        console.log('Fornecedor cadastrado com sucesso!', response);
      },
      (error) => {
        console.error('Erro ao cadastrar Fornecedor:', error);
      }
    );
  }

  editar(): void {
    
  }


}
