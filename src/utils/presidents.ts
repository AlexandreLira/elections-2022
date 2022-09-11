export interface PresidentProps {
    id: string;
    name: string;
    age?: string;
    hometown?: string;
    image: string;
    number: number;
    broken: {
        sortName?: string;
        fullName: string;
        image: string;
    };
    vicePresident:{
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