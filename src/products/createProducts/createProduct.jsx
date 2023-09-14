import { Button, Card, Checkbox, Input, Option, Select, Textarea, Typography } from "@material-tailwind/react";
import { useState } from "react";

const CreateProduct = () => {
    const [nome, setNome] = useState('')
    const [descricao, setDescricao] = useState('')
    const [UM, setUM] = useState('')
    const [grupo, setGrupo] = useState('')
    const [pesoBruto, setPesoBruto] = useState('')
    const [pesoLiquido, setPesoLiquido] = useState('')

    return (
        <div>
            
        <Card color={"transparent"} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-fit" shadow={true}>
            <Typography variant="h4" color="white">
                Cadastrar Produto
            </Typography>
            <Typography className="mt-1 text-gray-300 font-normal">
                Preencha os campos abaixos.
            </Typography>
            <form className="mt-4 mb-2 w-80  sm:w-96">
                <div className="mb-4 flex flex-col gap-4">
                    <Input value={descricao} onChange={e => setDescricao(e.target.value)} color="blue" size="lg" label="Descrição" className="shadow-lg text-white" />
                    <Select onChange={e => setUM(e)} color="blue" size="lg" label="Unidade sobre Medida" className="text-white">
                        <Option value="Exemplo 1">Exemplo 1</Option>
                        <Option value="Exemplo 2">Exemplo 2</Option>
                        <Option value="Exemplo 3">Exemplo 3</Option>
                    </Select>
                    <Select onChange={e => setGrupo(e)} color="blue" size="lg" label="Grupo" className="text-white">
                        <Option value="Exemplo 1">Exemplo 1</Option>
                        <Option value="Exemplo 2">Exemplo 2</Option>
                        <Option value="Exemplo 3">Exemplo 3</Option>
                    </Select>
                    <Input value={pesoBruto} onChange={e => setPesoBruto(e.target.value)} type="number" color="blue" className="text-white shadow-lg" size="lg" label="Peso Bruto (UN.)" />
                    <Input value={pesoLiquido} onChange={e => setPesoLiquido(e.target.value)} color="blue" type="number" className="text-white shadow-lg" size="lg" label="Peso Liquído (UN.)" />
                </div>
                <Button className="mt-6" fullWidth>Adicionar</Button>
            </form>
        </Card>
        </div>
      );
}

export default CreateProduct