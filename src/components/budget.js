import React, { useEffect, useState } from 'react';
import { useLocalStorage } from './useLocalStorage';
import { BtForm, BtInfo, ButtonPanell, CtBudget, CtButtons, CtClientBudget, InputClient, InputPanell, Panell } from '../styles/styled';
import { Link } from 'react-router-dom';
import PopUp from './popUp';
import { CtTotal } from '../styles/stylesTotalBudget';
import TotalBudget from './totalBudget';


const initialTotal = [{
        budgetName: '',
        client: '',
        web: '',
        pages: 0,
        lang: 0,
        seo: '',
        google: '',
        cost: 0
    }]

export default function Budget() {

    const [budget, setBudget] = useLocalStorage('budget', {budget:'', client:''});
    const [web, setWeb] = useLocalStorage('web', {check:false, cost:0});
    const [seo, setSeo] = useLocalStorage('seo', {check:false, cost:0});
    const [google, setGoogle] = useLocalStorage('google', {check:false, cost:0});
    const [isPageVisible, setIsPageVisible] = useState(false);
    const [isLangVisible, setIsLangVisible] = useState(false);
    const [cost, setCost] = useState(0);
    const [total, setTotal] = useState(initialTotal);

    const handleInput = (e) => {
        e.persist();
        setBudget({
            ...budget,
            [e.target.name]: e.target.value,
        });
    }

    const handleChange = (e) => {
        e.persist();
        setWeb({
            ...web,
            [e.target.name]: e.target.value
        });
    };

    //HAY ALGUNA MANERA DE REUSAR EL CONTADOR???

    const addPages = () => {
        setWeb({
            ...web,
            pages: parseInt(web.pages) + 1,
        });
    };

    const subtractPages = () => {
        if (web.pages >= 1) {
            setWeb({
                ...web,
                pages: parseInt(web.pages) - 1,
            });
        }
    };

    const addLang = () => {
        setWeb({
            ...web,
            lang: parseInt(web.lang) + 1
        });
    };

    const subtractLang = () => {
        if (web.lang >= 1) {
            setWeb({
                ...web,
                lang: parseInt(web.lang) -1
            });
        }
    };

    useEffect(() => {
        const subTotal = parseInt(web.cost) + parseInt(seo.cost) + parseInt(google.cost);
        const subTotalWeb = parseInt(web.pages * web.lang * 30);
        const totalCost = subTotal + subTotalWeb;
        setCost(totalCost);
    }, [google.cost, seo.cost, web.cost, web.lang, web.pages])
    
    const handleSubmit = () => {
        setTotal({
            ...total,
            budgetName: budget.budget,
            client: budget.client,
            web: (web.check === true ? 'web' : ''),
            pages: web.pages,
            lang: web.lang,
            seo: (seo.check === true ? 'SEO' : ''),
            google: (google.check === true ? 'Google Ads' : ''),
            cost: cost
        });
    };

    return (
        <CtClientBudget>
            <CtBudget>
                <h2>¿Qué quieres hacer?</h2>
                <label>Nombre del Presupuesto</label>
                <InputClient type="text" name='budget' value={budget.budget} onChange={handleInput}/>
                <label>Nombre del Cliente</label>
                <InputClient type="text" name='client' value={budget.client} onChange={handleInput}/>

                <label><input type="checkbox" name="web" value={0} checked={web.check} onChange={e => setWeb({ check: e.target.checked, cost: web.check ? e.target.value : 500, pages: 0, lang: 0 })} />Una página web (500€)</label>

                {
                    web.check ? 
                    <Panell>
                        <label>Número de páginas
                        <ButtonPanell onClick={addPages}>+</ButtonPanell>
                        <InputPanell type="number" placeholder={0} name='pages' value={web.pages} onChange={handleChange} />
                        <ButtonPanell onClick={subtractPages}>-</ButtonPanell>
                        <BtInfo onClick={()=>setIsPageVisible(true)}>i</BtInfo>       
                        </label>
                        <label>Número de idiomas
                        <ButtonPanell onClick={addLang}>+</ButtonPanell>
                        <InputPanell type="number" placeholder={0} name='lang' value={web.lang} onChange={handleChange} />
                        <ButtonPanell onClick={subtractLang}>-</ButtonPanell>
                        <BtInfo onClick={()=>setIsLangVisible(true)}>i</BtInfo>
                        </label>
                    </Panell>
                    :    
                    <div></div>      
                }

                <PopUp isLangVisible={isLangVisible} isPageVisible={isPageVisible} setIsPageVisible={setIsPageVisible} setIsLangVisible={setIsLangVisible}/>

                <label><input type="checkbox" name="seo" value={0} checked={seo.check} onChange={e => setSeo({check: e.target.checked, cost: seo.check ? e.target.value : 300})} />Una consultoría SEO (300€)</label>
                
                <label><input type="checkbox" name="google" value={0} checked={google.check} onChange={e => setGoogle({check: e.target.checked, cost: google.check ? e.target.value : 200})} />Una campaña de Google Ads (200€)</label>
                
                <h3>Precio: {cost ? cost : 0}€</h3>

                <CtButtons>
                    <Link to='/' className='link'><BtForm>Volver</BtForm></Link>
                    <BtForm onClick={handleSubmit}>Enviar</BtForm>
                </CtButtons>

            </CtBudget>

            <CtTotal>
                <h2>Resumen de Presupuestos</h2>
                <TotalBudget name={total.budgetName} client={total.client} cost={total.cost} web={total.web} pages={total.pages} lang={total.lang} seo={total.seo} google={total.google}/>
            </CtTotal>

        </CtClientBudget>
    )
}

