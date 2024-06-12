import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DialogFooter, DialogClose } from "@/components/ui/dialog"

export const Modal = ({ mainButton, opcion, children }) => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="destructive" size="icon">
                    {mainButton}
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader className="space-y-5">
                    <DialogTitle>{opcion}</DialogTitle>
                    <DialogDescription>
                        ¿Estás seguro de que quieres hacer esto? No podrás deshacer esta acción.
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter className={"pt-2"}>
                    <DialogClose asChild>
                        <Button type="button" variant="outline">
                            Cerrar
                        </Button>
                    </DialogClose>
                    <DialogClose asChild>
                        {children}
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
