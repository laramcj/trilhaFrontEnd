# 🚀 trilhaFrontEnd
Repositório criado para trilhaFrontEnd NttData

---
## 🚦 Desafio 3 - Flexbox
a) O Flexbox tem como meta ser um modo mais eficiente para criar layouts, alinhar e distribuir espaços entre itens em um container, mesmo quando as dimensões destes itens são desconhecidas e/ou dinâmicas (daí o termo "flex"). O Flexbox é um conjunto de propriedades que tem por objetivo organizar itens dentro de um elemento pai, normalmente chamado de container

b) A propriedade flex-direction define a direção do eixo principal e pode tem quatro valores possíveis:
 - row
 - row-reverse
 - column
 - column-reverse

Se o valor escolhido for row (linha) ou row-reverse (linha reversa), seu eixo principal se moverá ao longo da linha — na direção inline.

Se o valor escolhido for column (coluna) ou column-reverse (coluna reversa) e o eixo principal se moverá do topo até o fim da página — na direção block.

c) O eixo transversal é perpendicular ao eixo principal, logo, se a propriedade flex-direction estiver definida nas linhas, como row ou row-reverse, o eixo transversal estará na direção das colunas, como column ou column-reverse.

Se o eixo principal for definido nas colunas, como column ou column-reverse, então o eixo transversal estará na direção das linhas, como row ou row-reverse.

d) Flex container é o elemento que envolve sua estrutura. Você define que um elemento é um Flex Container com a propriedade display e valores flex ou inline-flex.

e) Flex Item são elementos-filhos do flex container.

f) O flex-wrap define se os itens devem quebrar ou não a linha. Por padrão eles não quebram linha, isso faz com que os flex itens sejam compactados além do limite do conteúdo.

Essa é geralmente uma propriedade que é quase sempre definida como flex-wrap: wrap; Pois assim quando um dos flex itens atinge o limite do conteúdo, o último item passa para a coluna debaixo e assim por diante.

g)  
 - Expansão: flex-grow define a habilidade de um flex item de crescer, caso necessário. O valor dessa propriedade é um valor numérico sem indicação de unidade, que serve para cálculo de proporção. Este valor dita a quantidade de espaço disponível no container que será ocupado pelo item. Se todos os ítens tiverem flex-grow definido em 1, o espaço remanescente no container será distribuído de forma igual entre todos. Se um dos ítens tem o valor de 2, vai ocupar o dobro de espaço no container com relação aos outros (ou pelo menos vai tentar fazer isso). Valores negativos não são aceitos pela propriedade.
 - Encolhimento: flex-shrink define a habilidade de um flex item de encolher, caso necessário. Valores negativos não são aceitos pela propriedade.
 - Tamanho: A propriedade flex-basis define o tamanho inicial dos elementos, em unidades de pixel, antes que o espaço remanescente seja redistribuído. O valor inicial desta propriedade é auto — neste caso o navegador observa se os itens possuem o mesmo tamanho. No exemplo acima, todos os itens têm uma largura de 100 pixels, que é utilizada como padrão na propriedade flex-basis. Se os elementos não possuírem um tamanho padrão, então as dimensões dos seus conteúdos (imagem, texto, etc) serão passadas como parâmetro para propriedade flex-basis. É por isso que quando escreve-se display: flex no elemento-pai para criar o contêiner, todos os elementos-filhos se organizam em linha e ocupam apenas o espaço necessário para exibir seu conteúdo.
 
h)  
 - Alinhamento: align-content organiza as linhas dentro de um flex container quando há espaço extra no eixo transversal, similar ao modo como justify-content alinha ítens individuais dentro do eixo principal. Esta propriedade não tem efeito quando há somente uma linha de flex items no container. 
   - flex-start / start: ítens alinhados com o início do container. O valor (com maior suporte dos navegadores) flex-start se guia pela flex-direction, enquanto start se guia pela direção do writing-mode.
   - flex-end / end: ítens alinhados com o final do container. O valor (com maior suporte dos navegadores) flex-end se guia pela flex-direction, enquanto end se guia pela direção do writing-mode.
   - center: ítens centralizados no container.
   - space-between: ítens distribuídos igualmente; a primeira linha junto ao início do container e a última linha junto ao final do container.
   - space-around: ítens distribuídos igualmente com o mesmo espaçamento entre cada linha. 
   - space-evenly: ítens distribuídos igualmente com o mesmo espaçamento entre eles. 
   - stretch (padrão): ítens em cada linha esticam para ocupar o espaço remanescente entre elas.
 - Justificação: justify-content define o alinhamento dos ítens ao longo do eixo principal. Ajuda a distribuir o espaço livre que sobrar no container tanto se todos os flex items em uma linha são inflexíveis, ou são flexíveis mas já atingiram seu tamanho máximo. Também exerce algum controle sobre o alinhamento de ítens quando eles ultrapassam o limite da linha.
   - flex-start (padrão): os ítens são alinhados junto à borda de início (start) de acordo com qual for a flex-direction do container.
   - flex-end: os ítens são alinhados junto à borda final (end) de acordo com qual for a flex-direction do container. 
   - start: os ítens são alinhados junto à borda de início da direção do writing-mode (modo de escrita).
   - end: os ítens são alinhados junto à borda final da direção do writing-mode (modo de escrita).
   - left: os ítens são alinhados junto à borda esquerda do container, a não ser que isso não faça sentido com o flex-direction que estiver sendo utilizado. Nesse caso, se comporta como start.
   - right: os ítens são alinhados junto à borda direita do container, a não ser que isso não faça sentido com o flex-direction que estiver sendo utilizado. Nesse caso, se comporta como start.
   - center: os ítens são centralizados na linha.
   - space-between: os ítens são distribuídos de forma igual ao longo da linha; o primeiro ítem junto à borda inicial da linha, o último junto à borda final da linha. 
   - space-around: os ítens são distribuídos na linha com o mesmo espaçamento entre eles. Note que, visualmente, o espaço pode não ser igual, uma vez que todos os ítens tem a mesma quantidade de espaço dos dois lados: o primeiro item vai ter somente uma unidade de espaço junto à borda do container, mas duas unidades de espaço entre ele e o próximo ítem, pois o próximo ítem também tem seu próprio espaçamento que está sendo aplicado. 
   - space-evenly: os ítens são distribuídos de forma que o espaçamento entre quaisquer dois itens da linha (incluindo entre os ítens e as bordas) seja igual.
 - Distribuição: align-items define o comportamento padrão de como flex items são alinhados de acordo com o eixo transversal (cross axis). De certa forma, funciona de forma similar ao justify-content, porém no eixo transversal (perpendicular ao eixo principal).
   - stretch (padrão): estica os ítens para preencher o container, respeitando o min-width/max-width).
   - flex-start/ start / self-start: ítens são posicionados no início do eixo transversal. A diferença entre eles é sutil e diz respeito às regras de flex-direction ou writing-mode. 
   - center: ítens são centralizados no eixo transversal.
   - baseline: ítens são alinhados de acordo com suas baselines.

Os modificadores safe e unsafe pode ser usados em conjunto com todas essas palavras-chave (favor conferir o suporte de cada navegador) e servem para prevenir qualquer alinhamento de elementos que faça com que o conteúdo fique inacessível (por exemplo, para fora da tela).

---
## 🚦 Desafio 2 - HTML & CSS
a)

 I.
       Tags estruturais
       <!– –> Cria um comentário - 
       !DOCTYPE html  A tag !DOCTYPE informa ao navegador a versão do HTML
       html > Envolve todo um documento html
       head > Envolve o cabeçalho de um documento html
       meta >  Fornece informações gerais sobre o documento
       style > Informações de estilo
       script > Linguagem script
       title > O título do documento
       body > Envolve o corpo (texto e tags) do documento html
       header > Define um cabeçalho para página, podendo ser utilizado dentro de outras sessões. 
       main > Representa o conteúdo principal do seu corpo, ou seja, o conteúdo relacionado diretamente com o tópico central da página ou com a funcionalidade central da aplicação;
       footer > Rodapé para a página
       section > Definem uma sessão para a página
       article > Separa o conteúdo da sua página
       aside > Representa uma seção de uma página cujo conteúdo é tangencialmente relacionado ao conteúdo do seu entorno, que poderia ser considerado separado do conteúdo;
       nav > Conteúdo de navegação. Muito utilizado em conjunto com listas e na criação de menus;
       div > Divisão da página. Desta forma, funciona como um container para conteúdo de fluxo. Uma vez que não possui um valor semântico, é muito utilizado para organizar melhor o conteúdo. 
       Cabeçalhos 
       hn > Cabeçalho nível n para n de 1 a 6 
       < h1></h1> - < h2></h2> - < h3></h3> - < h4></h4> - < h5></h5> - < h6></h6>
       Parágrafos 
       p > Um simples páragrafo
       Links 
       a > Cria um link e inclui atributos em comum
         href – O URL do documento que será vinculado a este. Para e-mail: mailto e link externo: http
         name – O nome da âncora 
         target – Identifica a janela ou local em que o link deverá ser aberto: blank, self, top, parent 
         rel – Define os tipos de link que avançam 
         rev – Define os tipos de link que revertem a ação 
         acesskey – Atribui uma tecla de atalho para este elemento 
         shape – Para uso com formas de objeto 
         coords – Para uso com formas de objeto 
         tabindex – Determina a ordem das guias 
         onclick – É um evento JavaScript 
         onmouseover – É um evento JavaScript 
         onmouseout – É um evento JavaScript
       Listas 
       ol > Uma lista ordenada
       ul > Uma lista não ordenada 
       li > Um item da lista
       menu > Um menu com uma lista de itens 
       Formatação de caracteres
       em > Maior ênfase em itálico 
       strong > Maior ênfase em negrito 
       code > Amostra de código
       b > Texto em negrito
       i > Texto em itálico 
       u > Texto sublinhado
       s > Texto tachado
       sub > Texto subscrito
       sup > Texto sobrescrito
       Outros elementos
       br > Uma quebra de linha
       address > Assinaturas ou informações gerais sobre o autor de um documento
       Imagens
       img > Insere uma imagem in-line no documento e inclui atributos comuns
       Tabelas
       table > Cria uma tabela
       caption > A legenda para a tabela
       thead > , tbody, tfoot
       tr > Uma linha na tabela
       th > Um cabeçalho de célula da tabela
       td > Define uma célula de dados da tabela
       Formulários
       form > Define um formulário
         action – Responsável por determinar o exato local para onde as informações coletadas no formulário deverão ser enviadas
         method – Método de empacotamento dos dados do formulário: get, post e enctype="multipart/form-data"
         name – Nome do objeto
       input > Caixa de texto
         type – Tipo de dado: text, file, radio, checkbox, hidden, password, submit, reset, button, image name – Identificação do campo 
         size – Largura 
         maxlength – Número máximo de caracteres permitidos 
         value – Texto que aparece dentro da caixa ou nome do botão 
         checked value – Valor assumido quando este campo for selecionado 
       textarea > Permite criar elementos de entrada com características de texto
         rows – Tamanho da linha da caixa de texto 
         cols – Tamanho da coluna da caixa de texto 
         name – Identificação do campo 
         wrap – Quebra de linha da caixa de texto: off, virtual, physical 
       select > Seleção 
         name – Identificador
       option > Opção 
         value – Valor do campo 

  II. O HTML semântico torna a estrutura de documentos para a web o mais claro tanto para programadores quanto para navegadores da web, mecanismos de pesquisa, leitores de tela, entre outras engines que processam essa informação. Quando utilizada corretamente, o HTML semântico ajuda os leitores de tela a interpretarem as informações de uma página para pessoas com deficiencia visual. Além disso, utilizar o HTML semantico também ajuda as ferramentas de busca a encontrarem a sua página e indicarem para mais pessoas.

  III. 

  IV. Acessibilidade na web é a prática de tornar conteúdos e funcionalidades acessíveis a todos os usuários. Ou seja, pessoas com deficiências, por meio diferentes dispositivos tecnológicos e conexões e com variadas experiências precisam ser capazes de compreender, navegar, perceber, interagir e contribuir no ambiente digital.
  De maneira bem simples, a acessibilidade na web está relacionada à facilidade de acesso.
  A proposta de um website (ou qualquer outra mídia digital) bem concebido e acessível é a de beneficiar as pessoas com necessidades especiais, dando-lhes autonomia e permitindo que elas não só utilizem, mas também contribuam com a web.
  Sua flexibilidade beneficia igualmente pessoas idosas, aquelas não fluentes na escrita de um idioma, pessoas com conexões lentas, ou usuários de tecnologias ultrapassadas, internautas novos ou pouco frequentes, usuários de telefones móveis, indivíduos com limitações temporárias, entre outros.
  Um website com adequado contraste de cores e com opção para alternância de tamanho da fonte beneficia igualmente o indivíduo com baixa visão, com a visão comprometida pela idade e quem faz uma busca em seu celular à luz do sol, por exemplo.
  
  V. Escrever o conteúdo do site limpo, claro e objetivo. Diagramar o conteúdo dentro de um desenho de layout que obedece às mais importantes regras de usabilidade e design. 
  Usar as recomendações do e a metodologia do W3C

  b) 
  
  I. A importância do CSS é a personalização da página web, é o CSS que nos possibilita decorar e estilizar de forma mais otimizada e coesa tornando o visual das páginas maia agradável. Quando utilizado mais de um CSS na mesma página o estilo é lido em cascata onde a ultima informação inserida irá se sobrepôr à anterior, caso exista uma mesma personalização para o mesmo campo.  Algumas vantagens que temos na utilização do CSS na nossa página é a execução de mudanças de forma mais rápida e fácil, ter as formatações aplicadas a várias páginas. 

  II. A diferença entre Class e id são:
  <br>Class: 
   - para chamá-la no HTML utilizamos class dentro da tag;
   - quando chamada no CSS é utilizaod o ".";
   - é utilizada quando vamos repetir o elemento várias vezes na página;
  

  <br>id:
   - para chamá-lo no HTML utilizamos id dentro da tag;
   - quando chamado no CSS é utilizaod o "#";
   - é utilizado apenas uma vez, quando o elemento é único.
   - mais específico e sobrepõe a classe.
  
  Um mesmo elemento pode ter id e classe ao mesmo tempo. 

  III. Podemos inserir o CSS na página de 3 maneiras:
   - Inline: usado em elementos específicos coma tag < style >, deve ser aplicado individualmente. Este estilo tem a maior prioridade  na hierarquia dos 3. 
   - Interno: é carregado e visualizado cada vez que se atualiza o site, pode acabar aumentando o tempo de carregamento. É inserido dentro da seção < head > através da tag < style >. As regras de CSS devem ser inseridas em cada página tornando esse estilo muito trabalhoso e demorado.
   - Externo: o melhor entre os 3 estilos, é o mais simples e eficiente. Nesta opção é criado um arquipo ".css" responsável por aplicar a personalização desejada. O mesmo arquivo pode ser aplicado em mais de uma página e isso torna qualquer mudança mais eficiente. 

  IV. Encadeamento é quando você quer uma personalização com mais especificidade. No encadeamento a leitura é feita da direita para a esquerda, pois é a ordem do HTML. Nos seletores encadeados não se usa a vírgula. Pode-se utilizar o agrupamento junto com o encadeamento. 
  Agrupamento é quando a mesma estilização é utilizada por mais de um elemento. A separação dos elementos é feita por vírgulas. 

  V. O motor de renderização do navegador representa cada elemento como uma caixa retangular, de acordo com o padrão definido pelo CSS conhecido como box (caixa/bloco) model. Dessa forma, o conteúdo do elemento é uma das quatro partes que compõem o box, sendo as demais o seu preenchimento, borda e margem. Na maioria dos casos, o que vemos é apenas o conteúdo do elemento, geralmente um texto, imagem, vídeo, etc. Esse conteúdo é o que consideramos as suas dimensões, altura e largura. Entretanto, é o conteúdo somado a margem, borda e preenchimento do elemento que determinam o espaço que o mesmo ocupa na tela do navegador. Os principais elementos que definem as dimensões e distanciamento das caixas são: Width / Height, Padding, Border (e Box-shadow). As áreas que compõem um box são: margin, padding, width e height. 
  Padding, margin e Border. 

  VI. Diferença entre margin e padding:
  <br> Padding é o espaço entre o conteúdo e a borda. Padding cria um espaço entre o conteúdo e a borda e não afeta o espaçamento entre os elementos.
  <br> Margin é o espaço fora do conteúdo, e é usada para criar um espaço dentre os elementos dispostos na tela. 

  VII. Position é uma propriedade utilizada para definir o posicionamento de um elemento na tela.São eles:

- static:
    É o position padrão de todo elemento

    div.static {
        position: static;
    }
- relative:
    Position relative é posicionado relativo a sua posição normal. diferente do static, recebe: top, bottom, right e left.

    div.relative {
        position: relative;
        left: 30px;
    }

- fixed
    Position fixed é posicionado em relação ao viewport. O elemento se manterá fixo mesmo se a tela for scrollada. Também recebe propriedades top, bottom, right e left.

    div.fixed {
        position: fixed;
        bottom: 0;
        right: 0;
    }

- absolute
    Position absolute é posicionado em relação ao seu elemento pai. Se não houver elemento pai, se posiciona em relação ao body.

    div.absolute {
        position: absolute;
        top: 80px;
        right: 0;
    }

- sticky
    Position sticky é similar ao fixed e se posiciona em relação a posição de scroll. Também recebe top, bottom, right e left.

    div.sticky {
        position: sticky;
        top: 0;
    }


---
## 🚦 Desafio 1 - GIT & VCS

a) Um Sistema de controle de versões (VCS) é um software para gerenciamento de alterações feitas no código de um projeto. Ele registra as alterações feitas e permite que a equipe envolvida no projeto tenha acesso ao histórico das ultimas atualizações, podendo recuperar uma versão específica ou entender quais mudanças foram feitas e quem as fez. É uma forma de ter um controle rigoroso sobre lançamentos de novidades do software e melhorias implementadas. É ele que permite que uma equipe de desenvolvimento de software trabalhe de forma simultânea em um projeto. 

b) 
   1 - Controle de histórico;
   2 - Trabalho em equipe (simultaneamente);
   3 - Resgate de versões;
   4 - Ramificação de projetos;
   5 - Organização e Segurança;

c) 
   - CVS;
   - SVN (Subversion);
   - Mercurial;

