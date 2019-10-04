frappe.ui.form.on("Sales Invoice", {
	discount_amount:function(frm) {
		console.log("test");
		var amt = cur_frm.doc.discount_amount;
		var total = cur_frm.doc.total;
		var disc_per = amt / total * 100;
		cur_frm.set_value("additional_discount_percentage", disc_per);
		
	}
});