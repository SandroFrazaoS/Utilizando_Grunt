# Utilizando Grunt

## Sandro Frazao Specht

Exercicio basico de Grunt, uma ferramenta dedicada à automatização de tarefas comuns da programação front-end, como compilação de linguagens e templates, minificação e cópia de arquivos.

### Curso
Este exercicio é referente ao Curso de Grunt feito na devmedia.com.br

---

### Instalação do Grunt

O Grunt é uma ferramenta desenvolvida em JavaScript e executada a partir do Node.js. Sua instalação se dá a partir do NPM, a partir do qual também podemos instalar vários plugins.

###### Passo 1 - Instalando grunt-cli
O primeiro pacote a ser instalado é o grunt-cli, que é a ferramenta de linha de comando (CLI) do Grunt.

```
npm install -g grunt-cli
```

###### Passo 2 - Instalando grunt-cli
O próximo pacote que deve ser instalado é o grunt, que contém de fato as funcionalidades para executar as tarefas.

```
npm install grunt --save-dev
```

###### Passo 3 - Instalando grunt-cli
Feito isso o Grunt já está instalado no projeto, agora precisamos instalar os plugins para executar as tarefas desejadas.

```
npm install grunt-contrib-cssmin --save-dev
```

---

## Minificação de arquivos

Minificação é um processo que tem por objetivo reduzir o tamanho dos arquivos, tornando seu carregamento nos browsers mais rápido. 
Exemplo abaixo.

![Imagem][tela1]

Além de ser possível minificar um único arquivo, também podemos aplicar o procedimento em vários arquivos ao mesmo tempo, concatenando-os e reduzindo o arquivo final.
Exemplo abaixo. 

```
module.exports = function(grunt){
     grunt.initConfig({
         cssmin : {
             dist : {
                 files : {
                     "dist/css/style.min.css" : ["css/*.css"]
                 }
             }
         }
     });
    
     grunt.loadNpmTasks("grunt-contrib-cssmin");
  }
```

- **Linha 1:** como o Grunt é executado pelo Node.js, precisamos exportar suas configurações como um módulo na forma de uma função JavaScript que será usada pelo Grunt CLI para executar as tasks.
--
- **Linha 2:** a configuração das tasks deve ser passada como parâmetro, na forma de um objeto JavaScript, para a função grunt.initConfig;
--
- **Linha 3:** cada task é representada por um atributo do objeto passado para a função initConfig. Nesse caso a task se chama cssmin, portanto esse é o nome do atributo;
--
- **Linha 4:** cada task no Grunt pode ter um ou vários targets, que podem ser entendidos como “subtarefas”. No geral cada target define quais arquivos devem ser afetados pela task.
--
- **Linha 5:** cada target pode ter suas configurações de acordo com a task a que pertence. No caso da task cssmin os targets devem definir o atributo files, no qual podemos configurar quais arquivos minificados serão gerados e a partir de quais arquivos originais. 
--
- **Linha 12:** para que as tasks possam ser executadas precisamos também carregá-las a partir dos plugins instalados. 

#### Minificando JavaScript

A task cssmin é usada para minificar apenas arquivos CSS. Para fazer o mesmo com JavaScript precisamos usar a task uglify. O plugin para isso pode ser instalado com o seguinte comando:

```
npm install grunt-contrib-uglify --save-dev

```
E sua configuração é bem semelhante à do cssmin. 
Exemplo abaixo.

```
uglify: {
    dist: {
      files: {
        "dist/js/script.min.js": ["js/*.js"]
      }
    }
}

...   

grunt.loadNpmTasks("grunt-contrib-cssmin");
```

---
### Execução automática de tarefas

Para acelerar ainda mais o trabalho podemos configurar uma task no Grunt capaz de observar as modificações realizadas nos arquivos e executar outras tasks quando isso ocorrer. O plugin para essa task se chama grunt-contrib-watch e pode ser instalado com o seguinte comando:
```
npm install grunt-contrib-watch --save-dev
```

Em seguida devemos configurar sua execução no gruntfile.js:
```
watch : {
   dist : {
       files : ["css/*.css"],
       tasks : ["cssmin"]
   }
}
```

Em seguida basta carregar o plugin:
```
grunt.loadNpmTasks("grunt-contrib-watch");
```

Agora basta executar no terminal o comando grunt watch para verificar a execução.

Sempre que um arquivo for modificado a task cssmin será executada

Feito isso o arquivo style.min.css foi criado e podemos apenas atualizar o browser para ver as modificações realizadas.

[tela1]: 1.png
