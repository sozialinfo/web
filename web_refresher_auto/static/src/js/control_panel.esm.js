/* Copyright 2024 Miika Nissi (https://miikanissi.com)
/* License AGPL-3.0 or later (https://www.gnu.org/licenses/agpl). */

import {ControlPanel} from "@web/search/control_panel/control_panel";
import {patch} from "@web/core/utils/patch";

patch(ControlPanel.prototype, {
    /**
     * Initializes the control panel and sets up the refresher properties.
     * It extends the existing refresher properties with a default auto-refresh interval time of 1 minute.
     *
     * @override
     */
    get refresherProps() {
        const props = super.refresherProps;
        return {
            ...props,
            autoRefresherIntervalTime: 10000,
        };
    },
});
