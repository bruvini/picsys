import React from 'react';
import Header from '../../componentes/Header/Header';
import Banner from '../../componentes/Banner/Banner';
import MainSection from '../../componentes/MainSection/MainSection';
import PatientSearch from '../../componentes/PatientSearch/PatientSearch';
import PatientHistory from '../../componentes/PatientHistory/PatientHistory';
import './AuriculotherapyPage.css';
import Footer from '../../componentes/Footer/Footer';
import imagemBanner from '../../assets/BannerAuriculo.png';

const AuriculotherapyPage = () => {
    const handleSearch = (e) => {
        // Implemente a lógica de pesquisa aqui
    };

    const handleHistoryChange = (e) => {
        // Implemente a lógica de mudança de histórico aqui
    };

    return (
        <div className="auriculotherapy-page">
            <Header />
            <Banner image={imagemBanner} />
            <MainSection>
                <PatientSearch onSearch={handleSearch} />
                <PatientHistory onChange={handleHistoryChange} />
                {/* Aqui você pode adicionar o componente de resultados quando estiver pronto */}
            </MainSection>
            <Footer/>
        </div>
    );
};

export default AuriculotherapyPage;
