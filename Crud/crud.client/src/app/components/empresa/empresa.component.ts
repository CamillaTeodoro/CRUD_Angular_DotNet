import { Component } from '@angular/core';

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.scss']
})
export class EmpresaComponent {
  searchQuery: string = '';
  showForm = false;
  isEditMode = false;
  formData = { cnpj: '', nome: '', cep: '' };

  // Função de busca
  buscar() {
    console.log('Buscando por:', this.searchQuery);
    this.showForm = true;  
    this.isEditMode = true; 
    this.formData = { cnpj: '12345678000195', nome: 'Empresa Teste', cep: '12345678' }; 
  }

  deletar() {
    console.log('Deletando item...');

  }

  // Função para cadastrar uma nova empresa
  cadastrarEmpresa() {
    this.showForm = true;
    this.isEditMode = false;
    this.formData = { cnpj: '', nome: '', cep: '' }; 
  }

  cadastrarFornecedor() {
    console.log('Abrindo formulário para cadastrar fornecedor');
    this.showForm = true;
    this.isEditMode = false;
    this.formData = { cnpj: '', nome: '', cep: '' }; 
  }

  // Função para listar fornecedores
  listarFornecedores() {
    console.log('Listando fornecedores...');
   
  }

  // Função para listar empresas
  listarEmpresas() {
    console.log('Listando empresas...');

  }

  // Função para salvar dados
  salvar() {
    if (this.isEditMode) {
      console.log('Salvando alterações:', this.formData);
    } else {
      console.log('Salvando novo cadastro:', this.formData);
    }
    
  }
}
