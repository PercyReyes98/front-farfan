import { Loader } from "@/components/ui/loader"
import { useReport } from "../../hooks/useReport"
import { ErrorPage } from ".."
import { Button } from "@/components/ui/button"
import { TfiReload } from "react-icons/tfi"
import { FaRegEye } from "react-icons/fa"
import { PiNotePencil } from "react-icons/pi"
import { AiOutlineDelete } from "react-icons/ai"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Modal } from "@/components/custom/modal"
import toast from "react-hot-toast"
import { useNavigate } from "react-router"

export const HomePage = () => {

    const { report, loading, error, killReport } = useReport()
    const navigate = useNavigate()

    const handleReload = () => {
        window.location.reload()
    }

    const handleInfo = (id) => {
        navigate(`/report/${id}`)
    }

    const handleDelete = async (id) => {
        try {
            await killReport(id).then(() => {
                toast.success("Reporte Eliminado!")
            })
        } catch (error) {
            toast.error("Algo salio mal!")
        }
    }

    const table = [
        {
            header: "RUC",
            cell: (row) => row.company_ruc
        },
        {
            header: "Fecha",
            cell: (row) => row.company_name,
        },
        {
            header: "Periodo",
            cell: (row) => row.period
        },
        {
            header: "Año",
            cell: (row) => row.exercise
        },
        {
            header: "Estado",
            cell: () => "Activo"
        },
        {
            header: "Fecha de Creación",
            cell: (row) => row.createdAt
        },
        {
            header: "Ultima Actualización",
            cell: (row) => row.updatedAt
        },
        {
            header: "Acciones",
            cell: (row) => (
                <div className="flex items-center gap-2">
                    <Button variant="secondary" size="icon" onClick={() => handleInfo(row.company_ruc)}><FaRegEye className="text-[23px]" /></Button>
                    <Button variant="editable" size="icon"><PiNotePencil className="text-[23px]" /></Button>
                    <Modal
                        mainButton={<AiOutlineDelete className="text-[23px]" />}
                        opcion="Eliminar"
                    >
                        <Button type="button" onClick={() => handleDelete(row._id)}>Eliminar</Button>
                    </Modal>
                </div>
            )
        }
    ]

    if (loading) return <Loader />

    if (error) return <ErrorPage mensajeerror={"Algo salio mal :c - Estamos trabajando para ti!"} />

    return (
        <>
            <div className="flex items-center justify-between pb-5">
                <h2 className="font-semibold uppercase">Lista de Hoja de Reportes :</h2>
                <Button onClick={handleReload} className="flex items-center gap-2">
                    Actualizar
                    <TfiReload className="text-[20px]" />
                </Button>
            </div>
            <section className="w-full">
                <div className="rounded-md border">
                    <Table className="cursor-pointer">
                        <TableHeader className="bg-red-600 hover:bg-red-600">
                            <TableRow>
                                {table.map((item, index) => (
                                    <TableHead key={index} className="text-white uppercase">{item.header}</TableHead>
                                ))}
                            </TableRow>
                        </TableHeader>
                        <TableBody className="w-full">
                            {report.length > 0 ? (
                                report.map((row, index) => (
                                    <TableRow key={index} className="hover:bg-muted/50">
                                        {table.map((item, index) => (
                                            <TableCell key={index}>
                                                {typeof item.cell === "function" ? item.cell(row) : row[item.cell]}
                                            </TableCell>
                                        ))}
                                    </TableRow>
                                ))
                            ) : (
                                <TableRow>
                                    <TableCell
                                        colSpan={report.length}
                                        className="h-24 text-center"
                                    >
                                        No Hay Datos.
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </div>
            </section>
        </>
    )
}
