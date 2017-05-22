var tagTitles = {
	'applescript'	: 'Linguagem AppleScript',
	'banda'		: 'Bandas de hardcore',
	'cygwin'	: 'Cygwin - O Linux no Windows',
	'curso'		: 'Cursos e Palestras em eventos e empresas',
	'doc'		: 'Artigos, Textos , Guias, ...',
	'esporte'	: 'Carveboard, surf, bike, escalada',
	'eu'		: 'Sobre mim',
	'forum'		: 'F�rums (Listas de Discuss�o)',
	'foto'		: 'Minhas fotos',
	'game'		: 'Joguinhos',
	'javascript'	: 'Linguagem Javascript',
	'linux'		: 'Sistema Linux',
	'livro'		: 'Livros que escrevi',
	'mac'		: 'Apple, Mac (Macintosh), Mac OS X',
	'musica'	: 'M�sica, minhas bandas, bateria, hardcore',
	'php'		: 'Linguagem PHP',
	'python'	: 'Linguagem Python',
	'regex'		: 'Express�es Regulares',
	'sed'		: 'Ferramenta SED',
	'shell'		: 'Shell Script (Bash)',
	'site'		: 'AURELIO.NET',
	'software'	: 'Softwares que escrevi',
	'viagem'	: 'Viagens que fiz',
	'video'		: 'Meus v�deos',
	'vim'		: 'Editor de textos Vim',
	'web'		: 'Tecnologias Web: (X)HTML, CSS, Javascript, SVG, ...'
}

var allLinks = [
// bin
[0, 'txt2regex',	'http://aurelio.net/txt2regex/', 'software shell regex'],
[1, 'Fun��es ZZ',	'http://funcoeszz.net', 'software shell'],
[2, 'txt2tags',		'http://txt2tags.sf.net/pt', 'software python web site'],
[0, 'Sedsed',		'http://aurelio.net/sedsed/', 'software sed python'],
[1, 'Sed Sokoban',	'/sed/sokoban/', 'software sed game'],
[0, 'Sed Arkanoid',	'/bin/sed/arkanoid/', 'software sed game'],
[0, 'RAC',		'/rac', 'software'],
[0, 'LELOLAB',		'/bin/lelolab/', 'software game'],
[0, 'Simulador das Elei��es 2002',	'/bin/python/urna.py', 'software python'],
[0, 'Importa agenda (CSV) no tocador de MP3 xingue-lingue',	'http://aurelio.net/blog/2005/11/09/contatos-do-csv-para-o-tocador-de-mp3/', 'software python musica'],
[0, 'Site com cores aleat�rias',	'/bin/php/randbody.phps', 'software php'],
[0, 'Projeto Final da Faculdade - Lojinha Virtual',	'/bin/php/ESEEI-proj_final/', 'software php'],
[0, 'OpenOffice Console Search',	'/bin/bash/oofind', 'software shell'],
[0, 'Quizz',		'/bin/python/quizz/', 'software python'],
[0, 'Sed scripts',	'/bin/sed/', 'software sed'],
[1, 'MoneyLog Experience', 	'/moneylog', 'software javascript web'],
[1, 'MiGuXeiToR', 	'/web/miguxeitor.html', 'software javascript web'],
[1, 'Engripeitor', 	'/web/engripeitor.html', 'software javascript web'],
[0, 'Campo Minado', 		'/web/mina/', 'software web javascript game'],
[0, 'BookCash',		'/bin/python/bookcash.py', 'software python livro'],
[0, 'Scraps (Livro de visitas)',		'/bin/php/scraps.phps', 'software php'],

// bin mac
[2, 'AdiumBook',	'/soft/adiumbook/', 'software applescript mac'],
[2, 'EmoMemory',	'/soft/emomemory/', 'software applescript mac game'],
[0, 'Import Contacts From Yahoo CSV',	'/bin/as/ImportContactsFromYahooCSV.py', 'software applescript python mac'],
[0, 'Export Contacts to MP3 Player',	'/soft/export-contacts-to-mp3-player/', 'software applescript mac'],
[0, 'Export Contacts to Yahoo CSV',	'/soft/export-contacts-to-yahoo-csv/', 'software applescript mac'],
[0, 'iPhoto Set Sequential Title',	'/soft/iphoto-set-sequential-title/', 'software applescript mac'],
[0, 'iTunes Find Artwork-less',	'/soft/itunes-find-artwork-less/', 'software applescript mac'],
[0, 'iTunes Rename Disk File',	'/soft/itunes-rename-disk-file/', 'software applescript mac'],
[0, 'iTunes Search in Lyrics',	'/soft/itunes-search-in-lyrics/', 'software applescript mac'],
[0, 'iTunes SED',	'/soft/itunes-sed/', 'software applescript mac'],
[0, 'iPhoto SED',	'/soft/iphoto-sed/', 'software applescript mac'],
[0, 'Gmail to Jabber',	'/soft/gmail-to-jabber/', 'software applescript mac'],

[0, 'AppleScript for Python Programmers',	'/doc/as4pp.html', 'doc applescript mac python'],
[0, 'Installing AppleScripts',	'/soft/applescript-install.html', 'doc applescript mac'],
[0, 'AppleScript Blog',	'http://applescripter.blogspot.com', 'doc applescript mac'],
[1, 'AppleScripts',	'/soft/', 'mac'],

// doc
[1, '* Portal Documenta��o',	'/doc', 'doc'],
[1, '* Portal Vim',		'/doc/vim/', 'doc vim'],
[1, '* Portal Sed',		'/sed/', 'doc sed'],
[1, '* Portal Cygwin',		'/cygwin/', 'doc cygwin linux'],
[1, '* Portal Mac',		'/mac/', 'doc mac'],
[1, '* Portal Shell',		'/shell/', 'doc shell'],
[1, '* Portal Programa��o',	'/bin/', 'doc software'],
[1, '* Portal Express�es Regulares',	'/er/', 'doc regex'],
[1, '* Portal dos Cursos',	'/curso/', 'curso'],
[1, '* Portal dos Livros',	'/livro', 'livro'],
[0, 'FAQ VERDE',		'/doc/faq.html', 'doc eu'],
[1, 'Fa�a Voc� Mesmo', 		'/fvm/', 'doc'],
[1, 'DORT / LER - Dicas para evitar les�es',	'/doc/misc/dort.html', 'doc'],
[0, 'Dotfiles',	'/doc/dotfiles/', 'doc linux'],
[0, 'Lista dos jogos terminados',	'/doc/misc/videogame.html', 'doc game'],
[0, 'RAMONES',	'/doc/misc/ramones.txt', 'doc musica banda'],
[0, '/usr/bin/adventure - Mapa das cavernas',	'/doc/misc/adventure-mapa.txt', 'doc linux game'],

[1, 'Sed HOWTO',		'/sed/sed-HOWTO', 'doc sed'],
[1, 'Canivete Su��o do Shell',	'/shell/canivete/', 'doc shell'],
[1, 'Dialog --tudo',		'/shell/dialog', 'doc shell'],
[1, 'Apostila Programa��o Shell',	'/shell/apostila', 'doc shell livro'],
[2, 'Livro Shell Script Profissional',	'http://www.shellscript.com.br', 'doc shell livro sed cygwin linux mac'],
[0, 'Editando arquivos do OpenOffice.org no VI',	'/doc/ooo-vi.html', 'doc vim'],
[0, 'Programas Compat�veis com Python v1.5',	'http://www.pythonbrasil.com.br/moin.cgi/ProgramasCompativeisV15', 'doc python'],
[0, 'Sem Mouse HOWTO',	'/doc/sem-mouse-HOWTO.html', 'doc linux'],
[0, 'Morte � tecla CAPS LOCK!',	'/doc/CAPSLOCK.txt', 'doc linux'],
[0, 'Fanatismo Digital - A Guerra dos Editores',	'/doc/guerra-editores.html', 'doc vim'],
[0, 'Revista LinuxMag #02 - Sele��o VI-sual',	'http://www.linuxmagazine.com.br/issue/02/selecao_visual.pdf', 'doc vim'],
[0, 'RdL #03 - O Poder do Modo Texto', '/doc/rdl/poder-modo-texto.html', 'doc linux'],
[0, 'RdL #03 - Express�es Regulares - Parte 1', '/doc/rdl/regex-1.html', 'doc regex'],
[0, 'RdL #04 - Vi, Vim e Venci', '/doc/rdl/vi-vim-venci.html', 'doc vim'],
[0, 'RdL #04 - �reas Compartilhadas', '/doc/rdl/areas-compartilhadas.html', 'doc linux'],
[0, 'RdL #07 - Express�es Regulares - Parte 2', '/doc/rdl/regex-2.html', 'doc regex'],
[0, 'RdL #47 - Cygwin - O Linux no Windows', '/cygwin/rdl/', 'doc cygwin'],
[0, 'RdL #49 - Pulando com o VI', '/doc/vim/pulando.html', 'doc vim'],
[0, 'Coluna 01 - Introdu��o', '/doc/coluna/coluna-01.html', 'doc linux'],
[0, 'Coluna 02 - ICQ', '/doc/coluna/coluna-02.html', 'doc linux'],
[0, 'Coluna 03 - Zgv/ImageMagick (manipula��o de imagens)', '/doc/coluna/coluna-03.html', 'doc linux web'],
[0, 'Coluna 04 - Pine (e-mails na tela preta)', '/doc/coluna/coluna-04.html', 'doc linux'],
[0, 'Coluna 05 - Jogos (uma viagem ao mundo da divers�o)', '/doc/coluna/coluna-05.html', 'doc linux game'],
[0, 'Coluna 06 - Arte Ascii (artistas do teclado)', '/doc/coluna/coluna-06.html', 'doc'],
[0, 'Coluna 07 - Screen (janelizando o modo texto - parte 1)', '/doc/coluna/coluna-07.html', 'doc linux'],
[0, 'Coluna 08 - Screen (janelizando o modo texto - parte 2)', '/doc/coluna/coluna-08.html', 'doc linux'],
[0, 'Coluna 09 - Vim (um vimrc diferente)', '/doc/coluna/coluna-09.vim', 'doc vim'],
[0, 'Coluna 10 - Mpage (impress�o �gil em postscript)', '/doc/coluna/coluna-10.html', 'doc linux'],
[0, 'Coluna 11 - Caracteres de Controle (n�o fuja, domine-os)', '/doc/coluna/coluna-11.html', 'doc'],
[0, 'Coluna 12 - Lynx (navega��o turbinada)', '/doc/coluna/coluna-12.html', 'doc linux web'],
[0, 'Desenvolverde 01 - Controle de altera��es (diff)', 'http://www.dicas-l.com.br/desenvolverde/desenvolverde_20061205', 'doc linux vim'],

[2, 'Express�es Regulares - Guia de Consulta R�pida',	'/er/guia/', 'doc livro regex python php javascript sed vim'],
[2, 'Express�es Regulares Online',	'http://guia-er.sf.net', 'doc livro regex python php javascript sed vim'],
[2, 'Livro Express�es Regulares - Uma Abordagem Divertida',	'/er/livro/', 'doc livro regex python php javascript sed vim'],
[0, 'Livro Dominando o SED',		'/sed/livro/', 'doc livro sed'],
[1, 'Cartilha do Webdesigner Antenado',	'http://aurelio.net/blog/2006/06/01/cartilha-do-webdesigner-antenado/', 'doc web'],
[0, 'CSS: Menu fixo por�m l�quido',	'http://aurelio.net/blog/2006/06/30/css-menu-fixo-porem-liquido/', 'doc web'],
[0, 'CAPTCHA de pobre',	'http://aurelio.net/blog/2007/05/11/captcha-de-pobre/', 'doc web php'],
[0, 'E-book ou livro impresso, como publicar sua obra?',	'http://aurelio.net/blog/2006/05/15/e-book-ou-livro-impresso-como-publicar-sua-obra/', 'doc livro'],
[0, 'Como instalar o Vim 7 no Mac OS X','http://aurelio.net/blog/2006/09/19/como-instalar-o-vim-7-no-mac-os-x/','doc mac vim'],

// listas
[0, 'Lista Linux2osx',	'http://br.groups.yahoo.com/group/linux2macosx', 'forum linux mac'],
[0, 'Lista Shell',	'http://br.groups.yahoo.com/group/shell-script', 'forum shell'],
[0, 'Lista Sed',	'http://br.groups.yahoo.com/group/sed-br', 'forum sed'],
[0, 'Lista VI',		'http://br.groups.yahoo.com/group/vi-br', 'forum vim'],
[0, 'Lista Cygwin',	'http://yahoogrupos.com.br/groups/cygwin-br', 'forum cygwin'],
[0, 'Lista ZZ',		'http://br.groups.yahoo.com/group/zztabtab', 'forum'],
[0, 'Lista txt2tags',	'http://br.groups.yahoo.com/group/txt2tags-br', 'forum'],
[0, 'Lista MacDev',	'http://br.groups.yahoo.com/group/macdev-br', 'forum mac'],

// musica
[0, 'Valeta',		'/valeta/', 'banda musica'],
[1, 'Correria HC',	'http://aurelio.net/correria/', 'banda musica'],
[0, 'Dumbs',		'/dumbs/', 'banda musica'],
[0, 'DDD',		'/musica/ddd/', 'musica'],
[0, 'Baterna - Curso Online de Bateria',		'/baterna/', 'musica'],
[0, 'Bateria',		'/musica/', 'musica'], 
[0, 'Carbona',		'http://aurelio.net/blog/2006/04/30/dica-de-banda-carbona/', 'banda musica'], 
[1, 'Roda de Pogo - A Dan�a Punk',	'/pogo/', 'musica'],
[0, 'Blog - M�sica', 'http://aurelio.net/tag/musica/','musica'],
[0, 'Blog - Sonzeira do M�s', 'http://aurelio.net/tag/sonzeira-do-mes/','musica'],

// site
[0, 'Sobre o site',		'/sobre.html', 'site'],
[0, 'Mapa do site',		'/mapa.html', 'site'],
[0, 'P�gina Principal',		'/index.html', 'site'],
[1, 'Deixe seu recado',		'/recados.php', 'site eu'],
[0, 'Contador de acessos',	'/bin/php/counter.phps', 'site software php'],
[0, 'Livro de visitas',		'/bin/php/recados.phps', 'site software php'],
[0, 'Registro do dom�nio',	'http://www.e-dominios.com.br?from=8061', 'site'],
[0, 'Em ingl�s',		'/en/', 'site'],
[0, 'Txt2tags Online',		'http://txt2tags.sourceforge.net/pt/online.php', 'software php'],

// eu
[1, 'Orkut',			'http://www.orkut.com/Profile.aspx?uid=2039382754798085041', 'eu foto'],
[0, 'Blog Feed (RSS)',		'http://aurelio.net/feed/', 'eu site'],
[2, 'Blog',			'http://aurelio.net/blog/', 'eu foto site'],
[0, 'Sobre mim',		'/mim.html', 'eu'],
[0, '$$$ Campanha Aur�lio Trilhard�rio $$$',	'/1000000000000.html', 'eu'],
[0, 'Blog antigo',		'/blog-arquivo.html', 'eu'],
[0, 'Processo de desnerdiza��o',	'http://aurelio.net/blog/2005/11/30/processo-de-desnerdizacao/', 'eu'],
[0, 'Aur�lio v2.8',		'http://aurelio.net/blog/2005/10/07/aurelio-v28/', 'eu'],
[0, 'Aur�lio v2.9',		'http://aurelio.net/blog/2006/10/07/aurelio-v29/','eu'],
[0, 'Aur�lio v3.0',		'http://aurelio.net/blog/2007/10/07/fiz-trinta/','eu'],
[0, 'Um ano sem Linux',		'http://aurelio.net/blog/2005/10/02/um-ano-sem-linux/', 'eu linux mac'],
[0, 'Dois anos de Mac OS X',	'http://aurelio.net/blog/2006/10/16/dois-anos-de-mac-os-x/','eu linux mac'],
[0, 'Free as in BIRD',		'http://aurelio.net/blog/2005/09/23/free-as-in-bird/', 'eu linux mac'],
[0, 'Curr�culo',	'/doc/cv-aurelio.html', 'eu'],
[0, 'Curr�culo em ingl�s',	'/doc/cv-aurelio-en.html', 'eu'],
[0, 'Flickr',			'http://www.flickr.com/photos/aureliojargas', 'eu foto'],
[1, 'Doa��o Paypal',		'https://www.paypal.com/cgi-bin/webscr?cmd=_xclick&business=verde%40aurelio%2enet&item_name=Aurelio%20Open%20Source%20Software&no_shipping=1&return=http%3a%2f%2faurelio%2enet%2fdonate%2dthanks%2ehtml&cn=Please%20leave%20a%20comment%20to%20me&tax=0&currency_code=USD&bn=PP%2dDonationsBF&charset=UTF%2d8', 'software doc site'],

// curso
[0, '4Linux - SP',		'/curso/4linux/', 'curso'],
[0, 'Conectiva - PR',	'/curso/conectiva/', 'curso'],
[0, 'Sucesu - PR',		'/curso/sucesu/', 'curso'],
[0, 'Congresso Catarinense de Software Livre (CCSL) - SC',		'/curso/ccsl/', 'curso'],
[0, 'Semana de Inform�tica da FAC - SP',	'/curso/fac/', 'curso'],
[0, 'F�rum Internacional de Software Livre (FISL) - RS',		'/curso/fisl/', 'curso'],
[0, 'Encontro Nacional LinuxChix - SP',	'/curso/linuxchix/', 'curso'],
[0, 'Semin�rio de Desenvolvimento em Software Livre (SDSL) - SP/RS',	 '/curso/sdsl/', 'curso'],
[0, 'Semana de Software Livre da UFPR - PR', '/curso/ufpr/', 'curso'],
[0, 'Semana de Capacita��o e Desenvolvimento em Software Livre (SCSL) - DF', '/curso/scsl/', 'curso'],
[0, 'Apostila Introdu��o ao Shell Script', '/curso/material/apostila-shell-intro.pdf', 'curso doc shell'],
[0, 'Apostila Conhecendo as Express�es Regulares', '/curso/material/apostila-expressoes-intro.pdf', 'curso doc regex'],
[0, 'Editor VI - Guia de Refer�ncia', '/curso/material/vim-ref.html', 'curso doc vim'],
[0, 'Slides: Software Livre - Experi�ncias de um Desenvolvedor', '/curso/material/desenvolvedor', 'curso doc'],
[0, 'PyCon Brasil [3] - SC', '/curso/pycon/iii/', 'curso'],

// foto
[0, 'Aur�lio Freak Show',	'/foto/tosco/', 'foto eu'],
[0, 'Surf - Fotos Aqu�ticas',	'/surf/', 'foto esporte'],
[0, 'Shows com a banda',	'/foto/banda/', 'foto banda musica'],
[0, 'Meu p� tatuado',		'/foto/pe/', 'foto eu'],
[0, 'Fotos bizarras',		'http://geocities.yahoo.com.br/aureliojargas/biz/', 'foto'],
[0, 'Jacar� do Parque Barig�i',	'http://aurelio.net/blog/2004/09/05/jacare-do-parque-barigui/', 'foto'],

// viagem
[1, '* Portal das Viagens',		'/viagem/', 'foto viagem'],
[1, 'Curitiba � Matinhos de bicicleta - PR',	'/viagem/matinhos-bike-2004/', 'foto viagem esporte'],
[1, 'Deserto do Atacama (Chile)',	'/viagem/atacama/', 'foto viagem'],
[1, 'Lagoinha do Leste - Floripa',	'/viagem/lagoinha-do-leste/', 'foto viagem'],
[0, 'Farol Sta. Marta e Imbituba - SC', '/viagem/farol-imbituba/', 'viagem foto'],
[0, 'Escalada Pico Marumbi - PR',	'/viagem/marumbi/', 'viagem foto esporte'],
[0, 'Trilha do Pinh�o - PR',		'/viagem/trilha-do-pinhao/', 'viagem foto'],
[0, 'F�rias e Surfe em Matinhos - PR',	'/viagem/matinhos-2005/', 'viagem foto esporte'],
[0, 'Farol de Santa Marta - SC', 	'http://aurelio.net/blog/2006/09/13/farol-de-santa-marta/', 'viagem foto'],
[1, 'Ouro Preto - MG', 			'/viagem/ouro-preto', 'viagem foto'],
[0, 'Mariana - MG', 			'/viagem/mariana', 'viagem foto'],
[0, 'Caxambu - MG', 			'/viagem/caxambu', 'viagem foto'],
[1, 'Praia do Forte - S�o Francisco do Sul - SC', '/viagem/forte', 'viagem foto'],

// misc
[0, 'Changelog Nerd',	'/doc/changelog-nerd.html', 'software doc'],
[0, 'Sed Sokoban Slashdotted',	'http://developers.slashdot.org/article.pl?sid=02/03/21/0217219', 'sed'],
[0, 'N�o fazem mais jogos como antigamente',	'http://aurelio.net/blog/2005/12/04/nao-fazem-mais-jogos-como-antigamente/', 'game'],
[0, 'Blog dos meus softwares (ingl�s)',	'http://aureliosoft.wordpress.com', 'applescript mac software'],
[0, 'Sintaxe txt2tags',	'http://txt2tags.sourceforge.net/tools/txt2tags.vim', 'vim'],
[0, 'Desenvolvedores brasileiros no Mac OS X', 'http://aurelio.net/blog/2006/08/08/desenvolvedores-brasileiros-no-mac-os-x/','mac'],
[1, '* Portal Carveboard',		'/carve/', 'foto video esporte'],
[0, 'Campeonato de Carveboard', 'http://aurelio.net/blog/2006/08/03/relato-fotos-e-videos-do-campeonato-de-carveboard/', 'foto video esporte']
];