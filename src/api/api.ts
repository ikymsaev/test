import axios from 'axios'

const Api = {

    getUsers(count: number) {
    const url = `http://www.filltext.com/?rows=${count || 5}&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&message=%7Blorem%7C32%7D&timestamp={date}&err=408`

    return axios.get(url)
        .then( res => res.data )
        .catch(err => {
            return err
        })
    }
}

export default Api