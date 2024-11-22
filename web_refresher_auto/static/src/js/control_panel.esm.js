/** @odoo-module **/
/* Copyright 2024 Miika Nissi (https://miikanissi.com)
/* License AGPL-3.0 or later (https://www.gnu.org/licenses/agpl). */

import {ControlPanel} from "@web/search/control_panel/control_panel";
import {patch} from "@web/core/utils/patch";
import {useState} from "@odoo/owl";

patch(ControlPanel.prototype, "web_refresher_auto.ControlPanel", {
    /**
     * Initializes the control panel and sets up the refresher properties.
     * It extends the existing refresher properties with a default auto-refresh interval time of 1 minute.
     *
     * @override
     */
    setup() {
        this._super(...arguments);
        this.refresherProps = useState({
            ...this.refresherProps,
            autoRefresherIntervalTime: 60000,
        });
    },
});
