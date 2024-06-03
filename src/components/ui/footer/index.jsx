
export const Footer = () => {

    const day = new Date().getDate()
    var month = new Date().getMonth() + 1
    const year = new Date().getFullYear()

    if (month === 1) {
        month = "Enero"
    } else if (month === 2) {
        month = "Febrero"
    } else if (month === 3) {
        month = "Marzo"
    } else if (month === 4) {
        month = "Abril"
    } else if (month === 5) {
        month = "Mayo"
    } else if (month === 6) {
        month = "Junio"
    }
    else if (month === 7) {
        month = "Julio"
    }
    else if (month === 8) {
        month = "Agosto"
    }
    else if (month === 9) {
        month = "Septiembre"
    }
    else if (month === 10) {
        month = "Octubre"
    }
    else if (month === 11) {
        month = "Noviembre"
    }
    else if (month === 12) {
        month = "Diciembre"
    }


    return (
        <footer className="py-5">
            <div className="container px-3 xl:px-0 flex items-end justify-between">
                <img src="/images/Logo.webp" alt="Logo" className="h-[50px] md:h-[85px]" />
                <p className="font-bold uppercase text-[0.6rem] lg:text-[0.95rem]">Datos adquiridos al : {day} de {month} del {year}</p>
            </div>
        </footer>
    )
}
