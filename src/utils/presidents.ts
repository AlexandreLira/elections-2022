export interface PresidentProps {
    id: string;
    name: string;
    age: string;
    hometown?: string;
    image: string;
    number: number;
    description: string;
    broken: {
        sortName?: string;
        fullName: string;
        image: string;
    };
    vicePresident: {
        name: string;
        image: string;
    }

}

export const PRESIDENTS_DATA: PresidentProps[] = [
    {
        id: '1',
        name: 'Jair Messias Bolsonaro',
        hometown: 'Glicério (SP)',
        image: 'https://static.wikia.nocookie.net/vvikipedia/images/7/7d/Foto-oficial-Bolsonaro.jpg/revision/latest?cb=20210410232940&path-prefix=pt',
        age: '67',
        number: 22,
        description: 'Jair Bolsonaro é o candidato que hoje ocupa o cargo de presidência da república. O gestor está no líder do executivo desde 1º de janeiro de 2019. É militar reformado e entrou na política em 1988, quando se elegeu vereador. Posteriormente, ocupou o cargo de deputado federal pelo Rio de Janeiro, em 1988, cargo que ocupou até 2018.rr',
        broken: {
            sortName: 'PL',
            fullName: 'Partido Liberal',
            image: 'https://upload.wikimedia.org/wikipedia/commons/0/00/Logomarca_do_Partido_Liberal.png',
        },
        vicePresident: {
            name: 'Walter Souza Braga Netto',
            image: 'https://upload.wikimedia.org/wikipedia/commons/5/55/Foto_Oficial_do_Sr_Ministro_da_Defesa_Walter_Braga_Netto.jpg'
        }
    },
    {
        id: '2',
        name: 'Luiz Inácio Lula da Silva',
        hometown: 'Caetés Garanhuns (PE)',
        image: 'https://upload.wikimedia.org/wikipedia/commons/f/f4/Lula_-_foto_oficial_-_05_jan_2007.jpg',
        age: '75',
        number: 13,
        description: 'Como bem se sabe, Lula já ocupou o Palácio do Planalto duas vezes, sendo eleito em 2022 e 2006. O candidato, atualmente, conta com o apoio de duas personalidades que optaram em retirar sua candidatura, sendo o Coach Pablo Marçal e o deputado federal André Janones. Atualmente, Lula é o líder nas pesquisas.',
        broken: {
            sortName: 'PT',
            fullName: 'Partido dos Trabalhadores',
            image: 'https://pt.org.br/wp-content/uploads/2022/08/partido-dos-trabalhadores.png',
        },
        vicePresident: {
            name: 'Geraldo Alckmin',
            image: 'https://upload.wikimedia.org/wikipedia/commons/f/fe/Filia%C3%A7%C3%A3o_do_ex-governador_Geraldo_Alckmin_%2851958929014%29_%28cropped%29.jpg'
        }
    },
    {
        id: '3',
        name: 'Simone Tebet',
        image: 'https://www.senado.leg.br/senadores/img/fotos-oficiais/senador5527.jpg',
        number: 15,
        age: '52',
        description: 'Simone Tebet é formada em direito pela UFRJ e fez carreira como advogada e professora. O início do seu caminho na política se deu em 2003, quando a mesma foi eleita deputada estadual, além de ter sido prefeita de sua cidade natal por dois mandatos (2005-2010). Em seguida, deixou o cargo para ser vice-governadora do Mato Grosso do Sul. No ano de 2015, a atual candidata à presidência, foi empossada como senadora.',
        broken: {
            sortName: 'MDB',
            fullName: 'Movimento Democrático Brasileiro',
            image: 'https://mdbam.com.br/wp-content/uploads/2018/09/Nota-de-Rep%C3%BAdio-ao-Ataque-a-Jair-Bolsonaro-MDB-AM.jpg',
        },
        vicePresident: {
            name: 'Mara Gabrilli',
            image: 'https://www.senado.leg.br/senadores/img/fotos-oficiais/senador5376.jpg'
        }
    },
    {
        id: '4',
        name: 'Leonardo Péricles',
        image: 'http://oestadoce.com.br/wp-content/uploads/2022/08/WhatsApp-Image-2022-08-31-at-11.00.07.jpeg',
        number: 80,
        age: '40',
        description: 'Nestas eleições de 2022, Léo Péricles é o único canditado homem e negro, concorrendo à vaga de presidente da república. Dentre suas atividades notáveis,  o mesmo foi eleito diretor da UNE, visto que o candidato no início de carreira política se aproximou do movimento estudantil. Em seguida, passou a integrar o Movimento de Luta nos Bairros, Vilas e Favelas (MLB). Péricles, atualmente, é técnico em eletrônica e mecânico de manutenção de máquinas.',
        broken: {
            sortName: 'UP',
            fullName: 'Unidade Popular',
            image: 'https://d1fdloi71mui9q.cloudfront.net/maUeigynSiadYqH7tgE9_FGbos3V2BTFfcfQ9',
        },
        vicePresident: {
            name: 'Samara Martins',
            image: 'https://scontent.ffor13-1.fna.fbcdn.net/v/t39.30808-6/277780231_368675378607146_8062228107013260618_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEyhg8LO1KpYp75QEGipraPCwKgh_BeBhALAqCH8F4GEN3NE9ZfPXOXBXN8MLwX7h9Ii692JFSNN1YPR9i6NsCp&_nc_ohc=2pVBCRlOvwAAX8UeLUy&_nc_ht=scontent.ffor13-1.fna&oh=00_AT_kPvRuUtTNAEXpCd0vVZboceUmVqYotH_jz7qR3q5piA&oe=6322853A'
        }
    },
    {
        id: '5',
        name: 'Soraya Thronicke',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Senadora_Soraya_Thronicke.jpg/800px-Senadora_Soraya_Thronicke.jpg',
        number: 44,
        age: '49',
        description: 'Soraya, atualmente, preside a União Brasil Mulher Nacional e o diretório do partido em Mato Grosso do Sul, além de ocupar o cargo de senadora. É graduada em direito com especializações, nas seguintes áreas: empresarial, tributário e Família e Sucessões. Disputou suas primeiras eleições em 2018, quando foi eleita para o Senado Federal. ',
        broken: {
            sortName: 'UB',
            fullName: 'União Brasil',
            image: 'https://pbs.twimg.com/profile_images/1445767803894517780/vfA4gVLT_400x400.jpg',
        },
        vicePresident: {
            name: 'Marcos Cintra',
            image: 'https://classic.exame.com/wp-content/uploads/2018/12/CCT_-_Comiss%C3%A3o_de_Ci%C3%AAncia_Tecnologia_Inova%C3%A7%C3%A3o_Comunica%C3%A7%C3%A3o_e_Inform%C3%A1tica_27892789937.jpg?quality=70&strip=info&w=1024'
        }
    },
    {
        id: '6',
        name: 'Luiz Felipe dAvila',
        image: 'https://upload.wikimedia.org/wikipedia/commons/8/8c/Luiz-felipe-davila_retrato_%28cropped%29.jpg',
        number: 30,
        age: '58',
        description: 'Felipe D’Avila é um cientista político e escritor, autor de dez títulos já publicados. Em sua trajetória, já atuou como comentarista político, e diretor executivo (CEO) da Fundação Estudar. O candidato defende uma agenda liberal, e a primeira vez que concorre ao cargo de presidente da república.',
        broken: {
            fullName: 'Novo',
            image: 'https://i.pinimg.com/736x/5d/76/14/5d76140a9d20b05ae90512890fb0d43a.jpg',
        },
        vicePresident: {
            name: 'Tiago Mitraud',
            image: 'https://novonacamara.com.br/wp-content/uploads/2021/02/novonacamara_tiago-mitraud_060819-mitraud-zema-15-1.jpg'
        }
    },
    {
        id: '7',
        name: 'Ciro Gomes',
        image: 'https://veja.abril.com.br/wp-content/uploads/2022/04/CIRO-GOMES-NOVA-ROUPAGEM.jpeg2_.jpg?quality=70&strip=info',
        number: 12,
        age: '62',
        description: 'Ciro possui uma longa trajetória política,  em especial como gestor, já tendo sido prefeito de Fortaleza, governador do Ceará, Ministério da Fazenda, no governo Itamar Franco, ministro da Integração Nacional de 2003 a 2006. Além disso, o candidato já ocupou os cargos de deputado estadual e federal. Em 2022, será a quarta vez em que Ciro concorrerá ao cargo de presidente da república.',
        broken: {
            sortName: 'PDT',
            fullName: 'Partido Democrático Trabalhista',
            image: 'https://scontent.ffor13-1.fna.fbcdn.net/v/t39.30808-6/247140427_4702601676441352_8786075063027930498_n.png?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFENgHa165MnEtyYdbGYdzaBcqCPYCAyUsFyoI9gIDJS5HPd8_L8t1v0Afzmbsx2uY9jKjB5RDrUNjH9_X581uZ&_nc_ohc=HonMSDPCzmQAX8vfxnR&tn=5i5KQ7okR3Buf-S3&_nc_ht=scontent.ffor13-1.fna&oh=00_AT9rYAMIOt5x_nzrukou2mW-CVDUSMjrh1KAvnETPEwTZQ&oe=63228AC0',
        },
        vicePresident: {
            name: 'Ana Paula Matos',
            image: 'https://www.otempo.com.br/image/contentid/policy:1.2711330:1659713352/Ana-Paula-Matos-jpg.jpg?f=3x2&w=1224'
        }
    },
    {
        id: '8',
        name: 'Sofia Manzano',
        image: 'https://midia.gruposinos.com.br/_midias/jpg/2022/07/31/sofia_manzano_pcb-20453135.jpg',
        number: 21,
        age: '51',
        description: 'Sofia Manzano é a representante escolhida pelo Partido Comunista Brasileiros (PCB). A candidata é formada em ciências econômicas pela  PUC de São Paulo, mestra em desenvolvimento econômico e doutora em história econômica pela USP. Além disso, ela também assume o cargo de professora na Universidade Estadual do Sudoeste da Bahia, além de ser pesquisadora de temas como a desigualdade social no capitalismo.',
        broken: {
            sortName: 'PCB',
            fullName: 'Partido Comunista Brasileiro',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/PCB_Logo.svg/1200px-PCB_Logo.svg.png',
        },
        vicePresident: {
            name: 'Antônio Alves',
            image: 'https://omunicipio.com.br/wp-content/plugins/serverdoin-apuracao-eleicoes/fotos/brasil/280001600166.jpg'
        }
    },
    {
        id: '9',
        name: 'José Maria Eymael',
        image: 'https://veja.abril.com.br/wp-content/uploads/2022/05/JOSE-MARIA-EYMAEL-2017-4452.jpg.jpg?quality=70&strip=info',
        number: 27,
        age: '83',
        description: 'Eymael já é um “velho conhecido” das eleições presidenciais, visto que este ano, o empresário concorre pela sexta vez ao cargo de líder do executivo. Ele é graduado em direito e filosofia pela PUCRS e também é advogado tributário. Em 1962, se filiou ao Partido Democrata Cristão (PDC), e já se elegeu duas vezes como deputado federal.',
        broken: {
            sortName: 'DC',
            fullName: 'Democracia Cristã',
            image: 'https://www.democraciacrista.org.br/wp-content/uploads/2022/07/bandeira.png',
        },
        vicePresident: {
            name: 'João Barbosa Bravo',
            image: 'https://ladodeca.com.br/wp-content/uploads/2022/08/Joao-Bravo-9h.jpg'
        }
    },
    {
        id: '10',
        name: 'Vera Lúcia',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Vera_L%C3%BAcia_no_Dia_Internacional_da_Mulher_Trabalhadora_2018_-_PSTU.jpg/400px-Vera_L%C3%BAcia_no_Dia_Internacional_da_Mulher_Trabalhadora_2018_-_PSTU.jpg?20180726182438',
        number: 16,
        age: '54',
        description: 'Vera é formada em ciências sociais UFS e já exerceu diversos ofícios laborais, como operária sapateira, garçonete e datilógrafa. Deu início a sua militância, ainda aos 19 anos, quando ingressou em uma fábrica de calçados. A candidata está no PSTU desde sua fundação, e já buscou se eleger como prefeita, governadora e deputada federal.',
        broken: {
            sortName: 'PSTU',
            fullName: 'Partido Socialista dos Trabalhadores Unificado',
            image: 'https://scontent.ffor13-1.fna.fbcdn.net/v/t39.30808-6/277585758_313625034192128_8106897127662922614_n.jpg?stp=cp0_dst-jpg_e15_fr_q65&_nc_cat=104&ccb=1-7&_nc_sid=85a577&efg=eyJpIjoidCJ9&_nc_eui2=AeE5K5wX8fc2_4IjZH5rVNBZGAPFR_0O9owYA8VH_Q72jGB3Nv4VQGFyOSW7iwC4tXmZa3rp2GgsXJqIFxzBzJ6s&_nc_ohc=iiv73s10bx0AX9CzE-y&tn=5i5KQ7okR3Buf-S3&_nc_ht=scontent.ffor13-1.fna&oh=00_AT-_XzIa41tYuCNAJ6NsnKWhyOm_N-OgMt83k3W2dEGXAw&oe=6321D0AE',
        },
        vicePresident: {
            name: 'Hertz Dias',
            image: 'https://www.pstu.org.br/wp-content/uploads/2019/11/hertz_dias.jpg'
        }
    },
    {
        id: '11',
        name: 'Roberto Jefferson',
        image: 'https://veja.abril.com.br/wp-content/uploads/2022/01/ROBERTO-JEFFERSON-ARMA-2021-022.jpg.jpg',
        number: 14,
        age: '69',
        description: 'Desde 1983, Roberto Jefferson já emendou seis mandatos seguidos como deputado federal. O candidato virou um conhecido do público, ao denunciar o polêmico esquema de compra de votos do qual também participou. Posteriormente, foi condenado pelos crimes de lavagem de dinheiro e corrupção passiva. Até então, os recursos públicos para realização da campanha de Jefferson estão suspensos, e o TSE ainda avalia o registro de sua candidatura.',
        broken: {
            sortName: 'PTB',
            fullName: 'Partido Socialista dos Trabalhadores Unificado',
            image: 'https://s.conjur.com.br/img/b/ptb-simbolo-2021.png',
        },
        vicePresident: {
            name: 'Padre Kelmon',
            image: 'https://s3.amazonaws.com/assets.ptb.org.br/wp-content/uploads/2022/08/23142716/a-a-a-c3cbcd27-c572-4bc0-860f-9919b8b9cc5a-829x1024.jpg'
        }
    },
]