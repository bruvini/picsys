import React from 'react';
import Header from '../../componentes/Header/Header';
import Banner from '../../componentes/Banner/Banner';
import MainSection from '../../componentes/MainSection/MainSection';
import PatientSearch from '../../componentes/PatientSearch/PatientSearch';
import PatientHistory from '../../componentes/PatientHistory/PatientHistory';
import Table from '../../componentes/Table/Table';
import TitleDescription from '../../componentes/TitleDescription/TitleDescription';
import './AcupunturaPage.css';
import Footer from '../../componentes/Footer/Footer';
import imagemBanner from '../../assets/BannerAcupuntura.png';

const AcupunturaPage = () => {
    const handleSearch = (e) => {
        // Implemente a lógica de pesquisa aqui
    };

    const handleHistoryChange = (e) => {
        // Implemente a lógica de mudança de histórico aqui
    };

    const columns = ["Pontos Sugeridos", "Local de Aplicação", "Indicação Clínica", "Funcionamento do ponto na MTC"];
    const data = [
        ["Ponto 1", "Local 1", "Indicação 1", "Funcionamento 1"],
        ["Ponto 2", "Local 2", "Indicação 2", "Funcionamento 2"],
        // ...
    ];

    const description = `
    <p>A acupuntura, uma terapia ancestral originária da Medicina Tradicional Chinesa, tem vindo a afirmar-se como uma ferramenta eficaz para a promoção da saúde, bem-estar e alívio de sintomas. Esta terapia, que se baseia na inserção de agulhas em pontos específicos do corpo para equilibrar o fluxo de energia, ganha agora um aliado tecnológico.</p>
<p>O PICSys emerge como um instrumento revolucionário para potencializar a prática da acupuntura. Com ele, os profissionais de saúde podem ter acesso a uma base de dados robusta, assegurando precisão no diagnóstico e no tratamento. Através de uma interface intuitiva e amigável, o PICSys permite o registo detalhado do paciente, a coleta sistemática de dados clínicos e a sugestão de pontos de acupuntura para tratamento. Com esta ferramenta, você terá em mãos o conhecimento acumulado da acupuntura, tornando o atendimento ao paciente mais seguro, assertivo e eficaz.</p>
<p>Adote o PICSys na sua prática clínica e junte-se à revolução da acupuntura com apoio tecnológico.</p>

    `;

    return (
        <div className="auriculotherapy-page">
            <Header />
            <Banner image={imagemBanner} />
            <MainSection>
                <TitleDescription
                    title="Acupuntura"
                    description={description}
                />
                <PatientSearch onSearch={handleSearch} />
                <PatientHistory onChange={handleHistoryChange} />
                <Table columns={columns} data={data} />
            </MainSection>
            <Footer />
        </div>
    );
};

export default AcupunturaPage;
