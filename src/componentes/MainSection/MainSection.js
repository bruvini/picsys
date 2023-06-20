import React from 'react';
import './MainSection.css';
import TitleDescription from '../TitleDescription/TitleDescription';
import Table from '../Table/Table';

const MainSection = ({ children }) => {
    const columns = ["Pontos Sugeridos", "Local de Aplicação", "Indicação Clínica", "Funcionamento do ponto na MTC"];
    const data = [
        ["Ponto 1", "Local 1", "Indicação 1", "Funcionamento 1"],
        ["Ponto 2", "Local 2", "Indicação 2", "Funcionamento 2"],
        // ...
    ];
    const description = `
    <p>A auriculoterapia, prática milenar integrante da Medicina Tradicional Chinesa, tem se destacado como uma poderosa ferramenta de promoção de saúde, bem-estar e alívio de sintomas. Esta terapia, que se baseia na estimulação de pontos específicos na orelha para tratar uma variedade de condições, ganha agora um aliado tecnológico.</p>
    <p>O PICSys surge como um instrumento revolucionário para otimizar a prática da auriculoterapia. Com ele, profissionais de saúde podem ter acesso a uma base de dados robusta, garantindo precisão no diagnóstico e no tratamento.Por meio de uma interface intuitiva e amigável, o PICSys permite o registro detalhado do paciente, a coleta sistemática de dados clínicos e a sugestão de pontos auriculares para tratamento. Com essa ferramenta, você terá ao seu alcance o conhecimento acumulado da auriculoterapia, tornando o atendimento ao paciente mais seguro, assertivo e eficiente.</p>
    <p>Adote o PICSys na sua prática clínica e junte-se à revolução da auriculoterapia com apoio tecnológico.</p>
    `;

    return (
        <div className="main-section">
            <TitleDescription
                title="Auriculoterapia"
                description={description}
            />
            {children}
            <Table columns={columns} data={data} />
        </div>
    );
};

export default MainSection;
