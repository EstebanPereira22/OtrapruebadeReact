const FormAddSubs = ({setType, setPrice, type, price}) => {

        const handleSubs = e => {
            e.preventDefault();
            console.log(type);
            console.log(price);
        }

    return(
        <div className="add-subscription">
            <h3>Agregar Suscripciones</h3>
            <form onSubmit={ handleSubs }>
            <p>Servicios</p>
            <select onChange={e => setType(e.target.value)}>
                <option value="">Elegir</option>
                <option value="netflix">Netflix</option>
                <option value="disneyPlus">Disney Plus</option>
                <option value="hboMax">HBO Max</option>
                <option value="starPlus">StarPlus</option>
                <option value="primeVideo">Prime Video</option>
                <option value="spotify">Spotify</option>
                <option value="apletv">Apple tv</option>
            </select>
            <p>Cantidad</p>
            <input type="number" placeholder="20$" onChange={e => setPrice(e.target.value)}/>
            <input type="submit" value={"Agregar"}/>
            </form>
        </div>
    );
}

export default FormAddSubs;