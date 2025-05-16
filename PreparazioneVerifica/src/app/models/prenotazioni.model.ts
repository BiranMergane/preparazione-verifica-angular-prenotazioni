export class Prenotazioni {
    nome: string;
    cognome: string;
    indirizzo: string;
    telefono: string;
    email: string;
    data: string;
    ora: string

    constructor( nome: string,
        cognome: string,
        indirizzo: string,
        telefono: string,
        email: string,
        data: string,
        ora: string)
    {
        this.nome = nome
        this.cognome = cognome
        this.indirizzo = indirizzo
        this.telefono = telefono
        this.email = email
        this.data = data
        this.ora = ora
    }
}