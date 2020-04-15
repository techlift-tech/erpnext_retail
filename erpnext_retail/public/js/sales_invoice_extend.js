// Check Is Return and set negative value
frappe.ui.form.on("Sales Invoice", "is_return", function (frm) {
    if (frm.doc.is_return) {
        for (let item of frm.doc.items) {
            if (item.qty > 0) {
                item.qty = -1 * (item.qty)
            }
        }
        cur_frm.refresh_field('items');
    }
});

// Check Is Return and set negative value On Submit
frappe.ui.form.on('Sales Invoice', {
    validate: function (frm) {
        if (frm.doc.is_return) {
            for (let item of frm.doc.items) {
                if (item.qty > 0) {
                    item.qty = -1 * (item.qty)
                }
            }
            cur_frm.refresh_field('items');
        }
    }
});