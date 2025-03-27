import React from 'react';
import {
    Dialog,
    DialogContent,
    DialogActions,
    Button,
} from "@mui/material/";

function AlertPopUp ({popupstate, popupmessage, changepopupstate}) {



    return (
        <Dialog open={popupstate} maxwidth={"md"} fullwidth={true}>
            <DialogContent>
                {popupmessage}
            </DialogContent>
            <DialogActions>
                <Button
                    variant={"contained"}
                    onClick={() => changepopupstate(false)}>
                    Acknowledge
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default AlertPopUp