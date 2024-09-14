# Mike - Um sistema inteligente para a segurança pública (Front-end do DEVO/Mobile)

Repositório de Front-end Mobile do Mike, um sistema que conecta o cidadão com a Polícia Militar e Civil na resolução dos casos de violência, contribuindo para a segurança no Estado de Pernambuco. O projeto está sendo desenvolvido nas disciplinas de Projeto Integrador IV, Projeto Integrador V e Programação para Dispositivos Móveis do curso de Sistemas para Internet, em parceria com o empreendedor social Daniel Paixão e sob supervisão dos professores Iago Rodrigues e Daniel Bezerra.

Tecnologias utilizadas:

- [Vite](https://vitejs.dev) (Compilador local/Configurações de desenvolvimento)
- [React](https://react.dev) (Framework de UI. Configurado no Vite para utilizar TypeScript)
- [TailwindCSS](https://tailwindcss.com) (Framework de estilização)
- [MambaUI](https://mambaui.com) (Biblioteca de componentes)
- [Ionic](https://ionicframework.com) (Framework de desenvolvimento mobile baseado em React)
- [Google Maps API](https://developers.google.com/maps) (API de mapas, cálculo de rotas e demais serviços de localização do Google)
- [Axios](https://axios-http.com/ptbr/) (Framework responsável pela conexão com o Back-end)
- [Cypress](https://www.cypress.io) (Framework de testes de front-end)

## Como colaborar no projeto?

1. Após clonar o repositório, digite o comando `npm install` para instalar as dependências necessárias.
2. Instale a [extensão oficial do Ionic](https://ionicframework.com/docs/intro/vscode-extension) no VSCode.
3. Na aba da extensão, clique em `Run > Web`, e o projeto irá abrir a versão para navegador.
4. Para abrir a versão Android, clique em `Build`, e depois em `Sync` na extensão do Ionic. Após isso, clique em `Android` ou `Open in Android Studio`
5. Outra opção é utilizar o [Nexus Browser](https://capacitor.nexusbrowser.com/capacitor), que é semelhante ao ExpoGO do React Native. Ao baixar o Nexus no seu celular, use o leitor de QR Code do app para ler o código disponibilizado no Preview da extensão do Ionic.

## Como rodar os testes do Cypress?

* Antes de começar, lembre-se de rodar no terminal `npm install` para instalar todas as depências do projeto. 
1. No terminal do Powershell, digite o comando `npx cypress open`, que irá rodar o Cypress na sua máquina.
2. Com o cypress aberto, selecione a opção E2E Testing, e escolha o navegador de sua preferência.
3. No navegador, basta selecionar o arquivo de teste que você deseja testar.

## Autores

- Ana Carolyne Costa
- Iale Almeida
- Luís Silvestre
- Lorenzo Leão
- Nicholas Bergqvist
- Rafael Martins
