import PropTypes from "prop-types"

function PropsExpert({marca, ano_lancamento}){
    return(
        <>
            <li>
                {marca}
                {ano_lancamento}
            </li>
        </>
    )
}

PropsExpert.prototypes = {
    marca: PropTypes.string,
    ano_lancamento: PropTypes.number,
}

PropsExpert.defaultProps = {
    marca: 'sem marca -',
    ano_lancamento: '0000',
}

export default PropsExpert