import PropTypes  from "prop-types"

function Item({marca, ano_lancamento}){
    return(
        <>
            <li>
                {marca} {ano_lancamento}
            </li>
        </>
    )
}

Item.prototypes = {
    marca: PropTypes.string,
    ano_lancamento: PropTypes.number,
}

Item.defaultProps = {
    marca: 'sem marca',
    ano_lancamento: '0000',
}

export default Item