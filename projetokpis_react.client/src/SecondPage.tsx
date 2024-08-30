import React, { useEffect, useState } from 'react';
import BandeiraAzul2 from './BndeiraAzul2.jpg'; // Importe a imagem



const SecondPage: React.FC = () => {
    const [apiResult, setApiResult] = useState<string>('Carregando...'); // Estado para armazenar o resultado da API

    // Fun��o para chamar a API quando o componente � montado
    useEffect(() => {
        fetch('https://localhost:7280/api/Kpis/kpisDELIVERY?parametro=OTIF')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erro ao carregar dados');
                }
                return response.json();
            })
            .then(data => {
                // Supondo que o resultado seja um array e que voc� queira o valor da propriedade "resultado"
                setApiResult(data[0]?.resultado || 'Sem dados'); // Verifica se h� dados e exibe o resultado
            })
            .catch(error => {
                console.error('Erro ao carregar dados:', error);
                setApiResult('Erro ao carregar dados'); // Exibe erro no textarea
            });
    }, []);

    return (
        <div className="App">
            <header className="App-header_OLD">

                <div className="marker-container" style={{ position: 'relative', width: '100%', height: '100vh' }}>


                    <div
                        className="markerlogo"
                        id="logo"
                        style={{
                            position: 'absolute',
                            top: '1%', // Ajuste conforme necess�rio
                            left: '1%', // Ajuste conforme necess�rio
                            width: '900px',
                            height: '30px',
                            border: 'none',
                            outline: 'none',
                            boxShadow: 'none',
                            backgroundColor: 'transparent',
                            color: '#282c34'
                        }}
                        
                    >

                        <h1>PITSTOP - PROCESSO O2C E SEUS KPIs</h1>


                    </div>




                    {/* Marcador 1 */}
                    <div
                        className="marker"
                        id="marker1"
                        style={{
                            position: 'absolute',
                            top: '50%', // Ajuste conforme necess�rio
                            left: '20%', // Ajuste conforme necess�rio
                            width: '100px',
                            height: '100px',
                            cursor: 'pointer',
                            border: 'none',
                            outline: 'none',
                            boxShadow: 'none',
                            backgroundColor: 'transparent'
                        }}
                        //onClick={() => handleMarkerClick(1)}
                    >
                        <img
                            src={BandeiraAzul2}
                            alt="Bandeira Azul 1"
                            style={{ width: '100%', height: '100%' }}
                        />
                    </div>
                    <div
                        className="comment-box"
                        id="comment-box1"
                        style={{
                            position: 'absolute',
                            top: 'calc(50% + 110px)', // Ajuste conforme necess�rio
                            left: '20%',
                            width: '120px', // Ajuste conforme necess�rio
                            height: '60px', // Ajuste conforme necess�rio
                            backgroundColor: 'white',
                            borderRadius: '8px',
                            padding: '5px',
                            boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)'
                        }}
                    >
                       
                        <div
                            style={{
                                position: 'absolute',
                                top: '0%', // Ajuste conforme necess�rio
                                left: '0%',
                                width: '100%',
                                height: '100%',
                                border: 'none',
                                borderRadius: '8px',
                                padding: '5px',
                                backgroundColor: 'white'
                            }}
                        >
                            <p style={{ fontSize: '10px', color: 'black' }}><strong>START SFA</strong></p>
                            <p style={{ fontSize: '10px', color: 'black' }}><strong>OTIF:</strong> {apiResult || 'Dados n�o dispon�veis'}</p>
                        </div>

                    </div>

                    {/* Marcador 2 */}
                    <div
                        className="marker"
                        id="marker2"
                        style={{
                            position: 'absolute',
                            top: '55%', // Ajuste conforme necess�rio
                            left: '32%', // Ajuste conforme necess�rio
                            width: '100px',
                            height: '100px',
                            cursor: 'pointer',
                            border: 'none',
                            outline: 'none',
                            boxShadow: 'none',
                            backgroundColor: 'transparent'
                        }}
                        onClick={() => handleMarkerClick(2)}
                    >
                        <img
                            src={BandeiraAzul2}
                            alt="Bandeira Azul 2"
                            style={{ width: '100%', height: '100%' }}
                        />
                    </div>
                    <div
                        className="comment-box"
                        id="comment-box2"
                        style={{
                            position: 'absolute',
                            top: 'calc(55% + 110px)', // Ajuste conforme necess�rio
                            left: '31%',
                            width: '155px', // Ajuste conforme necess�rio
                            height: '60px', // Ajuste conforme necess�rio
                            backgroundColor: 'white',
                            borderRadius: '8px',
                            padding: '5px',
                            boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)'
                        }}
                    >
                        <textarea
                            placeholder="PITSTOP FINANCE HOLD"
                            style={{
                                width: '150%',
                                height: '130%',
                                border: 'none',
                                borderRadius: '8px',
                                padding: '5px',
                                resize: 'none'
                            }}
                        />
                    </div>

                    {/* Marcador 3 */}
                    <div
                        className="marker"
                        id="marker3"
                        style={{
                            position: 'absolute',
                            top: '55%', // Ajuste conforme necess�rio
                            left: '44%', // Ajuste conforme necess�rio
                            width: '100px',
                            height: '100px',
                            cursor: 'pointer',
                            border: 'none',
                            outline: 'none',
                            boxShadow: 'none',
                            backgroundColor: 'transparent'
                        }}
                        onClick={() => handleMarkerClick(3)}
                    >
                        <img
                            src={BandeiraAzul2}
                            alt="Bandeira Azul 3"
                            style={{ width: '100%', height: '100%' }}
                        />
                    </div>
                    <div
                        className="comment-box"
                        id="comment-box3"
                        style={{
                            position: 'absolute',
                            top: 'calc(55% + 110px)', // Ajuste conforme necess�rio
                            left: '44%',
                            width: '155px', // Ajuste conforme necess�rio
                            height: '60px', // Ajuste conforme necess�rio
                            backgroundColor: 'white',
                            borderRadius: '8px',
                            padding: '5px',
                            boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)'
                        }}
                    >
                        <textarea
                            placeholder="PITSTOP QUALITY HOLD"
                            style={{
                                width: '155%',
                                height: '100%',
                                border: 'none',
                                borderRadius: '8px',
                                padding: '5px',
                                resize: 'none'
                            }}
                        />
                    </div>

                    {/* Marcador 4 */}
                    <div
                        className="marker"
                        id="marker4"
                        style={{
                            position: 'absolute',
                            top: '45%', // Ajuste conforme necess�rio
                            left: '56%', // Ajuste conforme necess�rio
                            width: '100px',
                            height: '100px',
                            cursor: 'pointer',
                            border: 'none',
                            outline: 'none',
                            boxShadow: 'none',
                            backgroundColor: 'transparent'
                        }}
                        onClick={() => handleMarkerClick(4)}
                    >
                        <img
                            src={BandeiraAzul2}
                            alt="Bandeira Azul 4"
                            style={{ width: '100%', height: '100%' }}
                        />
                    </div>
                    <div
                        className="comment-box"
                        id="comment-box4"
                        style={{
                            position: 'absolute',
                            top: 'calc(45% + 110px)', // Ajuste conforme necess�rio
                            left: '56%',
                            width: '120px', // Ajuste conforme necess�rio
                            height: '60px', // Ajuste conforme necess�rio
                            backgroundColor: 'white',
                            borderRadius: '8px',
                            padding: '5px',
                            boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)'
                        }}
                    >
                        <textarea
                            placeholder="---"
                            style={{
                                width: '100%',
                                height: '100%',
                                border: 'none',
                                borderRadius: '8px',
                                padding: '5px',
                                resize: 'none'
                            }}
                        />
                    </div>

                    {/* Marcador 5 */}
                    <div
                        className="marker"
                        id="marker5"
                        style={{
                            position: 'absolute',
                            top: '50%', // Ajuste conforme necess�rio
                            left: '68%', // Ajuste conforme necess�rio
                            width: '100px',
                            height: '100px',
                            cursor: 'pointer',
                            border: 'none',
                            outline: 'none',
                            boxShadow: 'none',
                            backgroundColor: 'transparent'
                        }}
                        onClick={() => handleMarkerClick(5)}
                    >
                        <img
                            src={BandeiraAzul2}
                            alt="Bandeira Azul 5"
                            style={{ width: '100%', height: '100%' }}
                        />
                    </div>
                    <div
                        className="comment-box"
                        id="comment-box5"
                        style={{
                            position: 'absolute',
                            top: 'calc(50% + 110px)', // Ajuste conforme necess�rio
                            left: '68%',
                            width: '120px', // Ajuste conforme necess�rio
                            height: '60px', // Ajuste conforme necess�rio
                            backgroundColor: 'white',
                            borderRadius: '8px',
                            padding: '5px',
                            boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)'
                        }}
                    >
                        <textarea
                            placeholder="---"
                            style={{
                                width: '100%',
                                height: '100%',
                                border: 'none',
                                borderRadius: '8px',
                                padding: '5px',
                                resize: 'none'
                            }}
                        />
                    </div>
                </div>
            </header>
        </div>
    );
}

export default SecondPage;
