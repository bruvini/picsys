import React from 'react';
import Header from '../../componentes/Header/Header';
import Banner from '../../componentes/Banner/Banner';
import MainSection from '../../componentes/MainSection/MainSection';
import PatientSearch from '../../componentes/PatientSearch/PatientSearch';
import PatientHistory from '../../componentes/PatientHistory/PatientHistory';
import Table from '../../componentes/Table/Table';
import TitleDescription from '../../componentes/TitleDescription/TitleDescription';
import './FitoterapiaPage.css';
import Footer from '../../componentes/Footer/Footer';
import imagemBanner from '../../assets/BannerFitoterapia.png';

const FitoterapiaPage = () => {
    const handleSearch = (e) => {
        // Implemente a lógica de pesquisa aqui
    };

    const handleHistoryChange = (e) => {
        // Implemente a lógica de mudança de histórico aqui
    };

    const columns = ["Fitoterápico sugerido", "Partes Usadas", "Modo de Usar", "Cuidados no Uso", "Uso Popular", "Imagem"];
    const data = [
        ["Alfavaca-anisada, alfavaca-preta", "Folhas", "Uso interno: Infusão preparada com 1 colher de sobremesa das folhas secas ou até 6 folhas frescas rasuradas para 1 xícara (200 ml) de água fervente, após abafar por 15 minutos, ingerir até 3 vezes ao dia por no máximo duas semanas. Para aliviar sintomas da TPM: infusão com 1 xícara de água fervente com 5 folhas de Ocimum selloi + 10cm de uma folha de Achillea millefolium + 5 folhas frescas de Melissa officinalis. Ter cautela no uso deste composto concomitantemente a ansiolíticos e medicamentos para tireoide.", "Deve ser evitado o uso interno na gestação, lactação e em crianças menores de 4 anos.","Planta usada pela população para sintomas de gripes, casos de inflamações na boca e mau hálito. O chá das folhas é empregado como carminativo, sudorífico e diurético. O xarope das folhas com mel é usado contra tosses, dores de cabeça e bronquites. A infusão das folhas é usada em afecções da boca. A decocção das raízes é usada contra diarréias, distúrbios do estômago e dores de cabeça. As folhas também são utilizadas como condimento na culinária por seu sabor e odor semelhante ao do cravo-da-índia. A infusão é usada externamente para uso local em casos de frieiras e banhos antigripais.", "Imagem.jpg"],
    ];

    const description = `
        <p>A fitoterapia, uma prática ancestral que utiliza plantas medicinais para promoção da saúde e tratamento de doenças, vem ganhando cada vez mais destaque por sua eficácia e por sua abordagem holística ao bem-estar humano. Este sistema terapêutico, que busca harmonizar o organismo através dos benefícios naturais das plantas, encontra agora um poderoso aliado tecnológico.</p>
        <p>O PICSys se apresenta como uma ferramenta inovadora que amplifica a eficácia da prática da fitoterapia. Com ele, os profissionais de saúde têm acesso a uma extensa base de dados, assegurando a precisão no diagnóstico e na indicação do tratamento fitoterápico adequado. Através de uma interface intuitiva e amigável, o PICSys permite o registro detalhado do paciente, a coleta sistemática de dados clínicos e a sugestão de tratamentos fitoterápicos personalizados. Com essa ferramenta, você terá em suas mãos o conhecimento acumulado da fitoterapia, tornando o atendimento ao paciente mais seguro, assertivo e integral.</p>
        <p>Integre o PICSys à sua prática clínica e junte-se à revolução da fitoterapia apoiada pela tecnologia.</p>
    `;

    return (
        <div className="auriculotherapy-page">
            <Header />
            <Banner image={imagemBanner} />
            <MainSection>
                <TitleDescription
                    title="Fitoterapia"
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

export default FitoterapiaPage;
