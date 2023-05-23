import PropsExpert from "./PropsExpert"

function Item(){
    return(
        <>
            <PropsExpert marca="Chevrolet " ano_lancamento={2002}/>
            <PropsExpert marca="Nissan " ano_lancamento={2015}/>
            <PropsExpert />
        </>
    )
}
export default Item