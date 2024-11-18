# Cadastro de Empresas e Fornecedores

Este aplicativo foi desenvolvido para gerenciar empresas, permitindo ações como cadastro, edição, listagem, exclusão de empresas e gerenciamento de fornecedores.

## Funcionalidades Principais

1. **Cadastro de Empresa/Fornecedor:**
   - Permite cadastrar empresas com informações como CNPJ, nome e CEP.

2. **Edição de Empresa/Fornecedor:**
   - Busca uma empresa/Fornecedor existente pelo CNPJ e permite editar suas informações.

3. **Listagem de Empresas:**
   - Exibe uma lista de todas as empresas cadastradas.

4. **Exclusão de Empresa/Fornecedor:**
   - Exclui uma empresa/Fornecedor do sistema pelo CNPJ.

5. **Gerenciamento de Fornecedores:**
   - Cadastro e listagem de fornecedores vinculados às empresas.

## Tecnologias Utilizadas

### Frontend
- **Angular**
- **Angular Material**
- **TypeScript**
- **HTTP Client**

### Backend
- **ASP.NET Core**
- **Entity Framework Core**
- **SQL Server**

## Como Rodar o Projeto

### Pré-requisitos

- **Node.js** (versão 16 ou superior).
- **Angular CLI** (versão 16 ou superior).
- **.NET SDK** (versão 8).
- **SQL Server** 
- **Microsoft SQL Server Management Studio**
- **Visual Studio**

### Como utilizar

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/CamillaTeodoro/CRUD_Angular_DotNet.git

   cd Crud/crud.client

   yarn install

2. **Edite o arquivo appsettings.json na pasta backend para incluir a string de conexão do SQL Server**

3. **Para rodar**

    ```bash
    ng serve

    cd ..

    cd crud.Server

    dotnet run

É possível também rodar diretamente no Visual Studio, pelo botão **Run**

4. O frontend estará disponível em https://localhost:57977/index