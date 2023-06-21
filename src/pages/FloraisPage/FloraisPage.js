import React from 'react';
import Header from '../../componentes/Header/Header';
import Banner from '../../componentes/Banner/Banner';
import MainSection from '../../componentes/MainSection/MainSection';
import PatientSearch from '../../componentes/PatientSearch/PatientSearch';
import PatientHistory from '../../componentes/PatientHistory/PatientHistory';
import Table from '../../componentes/Table/Table';
import TitleDescription from '../../componentes/TitleDescription/TitleDescription';
import './FloraisPage.css';
import Footer from '../../componentes/Footer/Footer';
import imagemBanner from '../../assets/BannerFlorais.png';
import CustomButton from '../../componentes/botoes/CustomButton';

const FloraisPage = () => {
    const handleSearch = (e) => {
        // Implemente a lógica de pesquisa aqui
    };

    const handleHistoryChange = (e) => {
        // Implemente a lógica de mudança de histórico aqui
    };

    const columns = ["Categoria", "Floral Sugerido", "Indicação Terapêutica"];
    const data = [
        ["Medo", "Mimullus", "medo de coisas conhecidas e timidez"],
        ["Medo", "Rock Rose", "terror e medo paralisante"],
        ["Falta de interesse pelas circunstâncias atuais", "Olive", "exaustão após esforço mental ou físico"],
        ["Solidão", "Heather", "excesso de preocupação por si e personalidade egoísta"]
    ];

    const description = `
        <p>Os Florais de Bach, uma abordagem terapêutica que se baseia no poder sutil das essências de flores para equilibrar as emoções, estão se tornando cada vez mais reconhecidos por seu impacto positivo no bem-estar emocional. Este sistema de tratamento, que busca harmonizar o estado emocional através dos benefícios naturais de 38 essências florais, agora ganha um aliado tecnológico poderoso.</p>
        <p>O PICSys surge como uma ferramenta revolucionária que potencializa a prática com Florais de Bach. Por meio dele, profissionais de saúde têm acesso a uma extensa base de dados, assegurando precisão na seleção da essência floral adequada para cada situação emocional. Com uma interface intuitiva e amigável, o PICSys permite o registro detalhado do paciente, a coleta sistemática de dados emocionais e a sugestão de florais para tratamento. Com essa ferramenta, você terá à sua disposição o conhecimento acumulado dos Florais de Bach, tornando o atendimento ao paciente mais seguro, assertivo e personalizado.</p>
        <p>Adote o PICSys em sua prática clínica e junte-se à revolução dos Florais de Bach apoiada pela tecnologia.</p>
    `;

    return (
        <div className="auriculotherapy-page">
            <Header />
            <Banner image={imagemBanner} />
            <MainSection>
                <TitleDescription
                    title="Florais de Bach"
                    description={description}
                />
                <PatientSearch onSearch={handleSearch} />
                <PatientHistory onChange={handleHistoryChange} />
                <Table columns={columns} data={data} />
                <CustomButton buttonStyle={{backgroundColor: '#ddd', color: '#000', width: '50%'}}>Gerar Receita para manipulação do Floral</CustomButton>
            </MainSection>
            <Footer />
        </div>
    );
};

export default FloraisPage;
