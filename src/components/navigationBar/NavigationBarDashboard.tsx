import React from "react";
import clsx from 'clsx';
import {
    AppBar,
    Toolbar,
    Typography,
    IconButton,
} from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";
import DeleteIcon from "@material-ui/icons/DeleteForever";
import ReplayIcon from "@material-ui/icons/Replay";
import useNavigateBar from "./useNavigationBar";


export interface INavigateBarDashboardProps { }

export function NavigationBarDashboard(props: INavigateBarDashboardProps) {

    const navigateBarService = useNavigateBar();

    const handleSaveClick = () => {
        navigateBarService.save();
    };
    const handleDeleteClick = () => {
        navigateBarService.delete();
    };
    const handleRefreshClick = () => {
        navigateBarService.refresh();
    };

    return (
        <AppBar position="fixed">
            <Toolbar>
                <Typography variant="h6" noWrap>
                    {navigateBarService.getTitle()}
                </Typography>

                <div />

                <IconButton
                    edge='end'
                    aria-label="switch-language"
                    aria-haspopup='true'
                    color='inherit'>

                    <Typography variant="h6" noWrap>
                        { }
                    </Typography>
                </IconButton>

                <IconButton
                    edge='end'
                    aria-label='reload'
                    aria-haspopup='true'
                    onClick={handleRefreshClick}
                    color='inherit'
                    disabled={!navigateBarService.isRefreshActive()}
                >
                    <ReplayIcon />
                </IconButton>
                <IconButton
                    edge='end'
                    aria-label='save'
                    aria-haspopup='true'
                    onClick={handleSaveClick}
                    color='inherit'
                    disabled={!navigateBarService.isSaveActive()}
                >
                    <SaveIcon />
                </IconButton>
                <IconButton
                    edge='end'
                    aria-label='delete'
                    aria-haspopup='true'
                    onClick={handleDeleteClick}
                    color='inherit'
                    disabled={!navigateBarService.isDeleteActive()}
                >
                    <DeleteIcon />
                </IconButton>
            </Toolbar>
        </AppBar>

    );
};


