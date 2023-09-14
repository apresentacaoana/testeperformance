import "./listProducts.css";
import { useEffect, useState, useCallback } from "react";
import { DeleteIcon, NotAllowedIcon, EditIcon, ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Button, IconButton, List, ListItem, Typography } from "@material-tailwind/react";
import {
    Grid,
    Center,
    Select,
    ButtonProps,
    Text,
    ChakraProvider
} from "@chakra-ui/react";
import { getProducts } from '../../controllers/products';
import { usePagination } from "react-use-pagination";
import client from '../../util/authUtil';

function ListProjects() {

    const {
        setNextPage,
        setPreviousPage,
    } = usePagination({ totalItems: 0 });

    const [products, setProducts] = useState();
    const [currentPage, setCurrentPage] = useState(1)
    const [loading, setLoading] = useState(true);
    // const [filter, setFilter] = useState(false);
    const loadingData = async (currentPage) => {
        setLoading(true);
        const result = await getProducts(currentPage, 10);
        setProducts(result);
        setLoading(false);
    }
    useEffect(() => {
        loadingData(currentPage)
    }, [currentPage])
    // const handleDelete = async (id) => {
    //     await fetch(API + "/todos/" + id, {
    //         method: "DELETE",
    //     });

    //     setProduct((prevState) => prevState.filter((product) => product.id !== id));
    // };
    // useEffect(() => {
    //     async function fetchData() {
    //         setData(await getProducts(0, 10))
    //     }
    //     fetchData()
    //     console.log("teste", data)
    // }, [data])
    if (loading) {
        return <p>Carregando...</p>;
    } else {
        return (
            <div className="sm:mx-52 h-screen flex flex-col">
                <div className="mt-5">
                    <h1 className="text-white font-bold text-[32px] text-center sm:text-start">Produtos</h1>
                    <List className="gap-4">
                        {products.map((product) => (
                            <ListItem className="text-white bg-[rgba(255,255,255,0.1)] w-full p-5 shadow-2xl flex flex-col items-start">
                                <Typography className="font-bold">{product.descricao}</Typography>
                                <div className="flex flex-col">
                                    <Typography>Grupo: {product.grupo}</Typography>
                                    <Typography>Peso Bruto: {product.pesoBruto} {product.um}</Typography>
                                    <Typography>Peso Líquido: {product.pesoLiquido} {product.um}</Typography>
                                    <div className="flex mt-5 gap-4">
                                        <IconButton color="white" variant="outlined">
                                            <EditIcon className="text-white" size={20} />
                                        </IconButton>
                                        <IconButton variant="outlined" color="red">
                                            <DeleteIcon className="text-red-400" size={20} />
                                        </IconButton>
                                    </div>
                                </div>
                            </ListItem>
                        ))}
                    </List>
                </div>
    
                {/** PAGINATION */}
                <div className="grow w-full relative bottom-0 ">
                    <div className="flex absolute left-1/2 -translate-x-1/2 -bottom-20 py-3 text-white items-center">
                        <Button
                            variant="text"
                            className="flex text-white items-center gap-1"
                            onClick={setPreviousPage}
                            disabled={currentPage === 1}
                        >
                            <ChevronLeftIcon strokeWidth={1} className="h-2 w-2" /> 
                            <div className="hidden md:block">Anterior</div>
                        </Button>
                        <Button
                            variant="text"
                            className="flex text-white items-center gap-1"
                            onClick={setNextPage}
                            // disabled={currentPage === 5}
                        >
                            <div className="hidden md:block">Próximo</div>
                            <ChevronRightIcon strokeWidth={1} className="h-2 w-2" />
                        </Button>
                    </div>
                </div>
            </div>
        );
    }
}

export default ListProjects;