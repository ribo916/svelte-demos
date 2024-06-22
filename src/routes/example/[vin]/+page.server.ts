function combineData(amSchedule, milestones, actions) {
	let payments = [];

	for (var i = 0; i < amSchedule.length; i++) {
		const payNum = Number(amSchedule[i].paymentNumber);
		payments[payNum] = {
			am: amSchedule[i],
			milestone: {},
			action: {}
		};
	}

	for (var i = 0; i < milestones.length; i++) {
		const payNum = Number(milestones[i].paymentNumber);
		payments[payNum].milestone = milestones[i];
	}

	for (var i = 0; i < actions.length; i++) {
		const payNum = Number(actions[i].Payment);
		payments[payNum].action = actions[i];
	}

	return payments;
}

export async function load({ params }) {
	const vin = params.vin;

	const response = await fetch('https://xmnb-eiog-2rhp.n7c.xano.io/api:dQBqCOiu/vehicledetail', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			authentication: {
				securekey: '317e8215-cbe5-41a1-8519-0e8dfc3e3379'
			},
			vin: vin,
			responserequest: {
				loandetails: true,
				vinhistory: true
			}
		})
	});
	const vehicle = await response.json();

	const payments = combineData(
		vehicle.vindetails.AmortizationSchedule,
		vehicle.vindetails.Milestones,
		vehicle.vindetails.ActionPlan
	);

	return {
		vin,
		vehicle,
		payments
	};
}
