import { Card, Button, Typography, } from "@/components/ClientSide";
import { useState, useEffect } from "react";
import Link from 'next/link';

interface Adm {
    id: number;
    nome: String;
    email: String
    cpf: String;
    senha: String;
}

interface ListProps {
    admsBD: Adm[];
}

//Forma de exibir tirando os dados da API (Não vai ser utilizado agora)

export default function TelaListAdm(props: ListProps) {

    //Consulta a API
    const [admins, setAdmins] = useState<Adm[]>([]);
 
    const fetchAdmins = async () => {
        const reponse = await fetch("/api/administrador");
        const  data = await reponse.json();
        setAdmins(data);
    }
 
    useEffect(() => {
        fetchAdmins();
    }, []);

    //Fim Consulta a API

    /*const fakeApi = [{
        name: "Maria Gabriela Fernandes",
        email: "mgfernandes@wiltickets.org",
        CPF: "030.321.538-20",
    },
    {
        name: "João Almeida da Silva",
        email: "jadsilva@wiltickets.org",
        CPF: "045.123.764-90",
    }]*/

return (
    <section className='bg-gray-200 text-blue-900 rounded-xl p-10 m-5 w-auto h-auto flex flex-col gap-20'>

        <Card color="transparent" shadow={false}>
            <Typography variant="h4" color="blue-gray">
                Administradores:
            </Typography>

            {props.admsBD.map((admin) => (
                <ul className="bg-gray-300 mt-10 mr-5 flex flex-col gap-6">
                    <li key={admin.id} className="font-semibold">{admin.nome}</li>
                    <li key={admin.id}>Email: {admin.email}</li>
                    <li key={admin.id}>CPF: {admin.cpf}</li>
                    <li key={admin.id}>Senha: {admin.senha}</li>
                </ul>
            ))}
        </Card>

        <Link href="/administrador/admin-new">
            <Button className="mt-20" fullWidth>
                Cadastrar Novo Administrador
            </Button>
        </Link>

    </section>
)
}