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
    this.showForm = true;  
    this.isEditMode = true; 
    this.formData = {empresaId: 0, cnpj: '12345678000195', nome: 'Empresa Teste', cep: '12345678' }; 
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
    console.log('Abrindo formulário para cadastrar fornecedor');
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
  salvar() {

      this.http.post<Empresa>("/api/empresas", this.formData)
      .subscribe(
        (response) => {
          console.log('Empresa cadastrada com sucesso!', response);
        },
        (error) => {
          console.error('Erro ao cadastrar empresa:', error);
        }
      );
   
    
  }
}
