<script lang="ts">
	import { curr } from '$lib/helpers';
	import DealerData from './DealerData.svelte';

	import { slide } from 'svelte/transition';
	import Toggle from './Toggle.svelte';

	import SlideOver from './SlideOver.svelte';
	import { slideOpen, generatedContent } from './stores';

	export let data;

	let showPayment = true;
	let showStage = true;
	let showCalcs = true;

	let gettingContent = false;

	const vehicle = data.vehicle;
	const details = vehicle.vindetails;

	async function getContent(outreachactionid: string) {
		gettingContent = true;

		if (!outreachactionid) {
			gettingContent = false;
			$generatedContent = 'There was an issue loading the content.';
		}

		const response = await fetch(
			'https://xmnb-eiog-2rhp.n7c.xano.io/api:u5dxb1mX/outreachtriggeraction',
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					authentication: {
						securekey: '317e8215-cbe5-41a1-8519-0e8dfc3e3379'
					},
					vin: data.vin,
					outreachactionid,
					responserequest: {
						loandetails: true,
						vinhistory: true
					},
					to: {
						mobilenumber: '',
						email: '',
						provider: ''
					}
				})
			}
		);
		const actionContent = await response.json();

		$slideOpen = !$slideOpen;
		gettingContent = false;

		console.log('ACTION CONTENT');
		console.log(actionContent);

		$generatedContent = actionContent;
		return { success: true };
	}
</script>

<SlideOver />

<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
	<div class="mx-auto max-w-3xl">
		<h1 class="text-3xl font-semibold leading-6 my-6 text-gray-900 dark:text-white dark:text-white">
			Outreach plan for {data.vin}
		</h1>
		<h2 class="text-xl font-semibold leading-6 my-4 text-gray-900 dark:text-white dark:text-white">
			{details.Year}
			{details.Make}
			{details.Model}
		</h2>

		<div class="flex">
			<Toggle bind:toggle={showPayment}>
				<span class="ml-3 text-sm" id="payments-label">
					<span class:text-skeleton-dark={showPayment} class:text-skeleton-light={!showPayment} class="font-medium">Show Payments</span>
					<!-- <span class="text-skeleton-light">(subtitle)</span> -->
				</span>
			</Toggle>

			<Toggle bind:toggle={showStage}>
				<span class="ml-3 text-sm" id="payments-label">
					<span class:text-skeleton-dark={showPayment} class:text-skeleton-light={!showPayment} class="font-medium">Show Phase</span>
					<!-- <span class="text-skeleton-light">(subtitle)</span> -->
				</span>
			</Toggle>

			<Toggle bind:toggle={showCalcs}>
				<span class="ml-3 text-sm" id="payments-label">
					<span class:text-skeleton-dark={showPayment} class:text-skeleton-light={!showPayment} class="font-medium">Show Calculations</span>
					<!-- <span class="text-skeleton-light">(subtitle)</span> -->
				</span>
			</Toggle>
		</div>

		<div class="flow-root">
			<ul role="list" class="-mb-8">
				<li>
					<div class="relative pb-8">
						<span class="absolute left-5 top-5 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true"
						></span>
						<div class="relative flex items-start space-x-3">
							<div class="relative">
								<img
									class="flex h-10 w-10 items-center object-center object-cover justify-center rounded-full bg-gray-400 ring-8 ring-white"
									src="/diego-damato-ie3oMcFglXo-unsplash.jpg"
									alt=""
								/>
							</div>
							<div class="min-w-0 flex-1">
								<div>
									<div class="text-sm">
										<span class="font-medium text-gray-900 dark:text-white dark:text-white">
											Loan Balance of {curr(details.CurrentBalance)} (Payment #{details.CurrentPaymentNumber}
											of {details.NumberOfPayments})</span
										>
									</div>
									<p class="mt-0.5 text-sm text-gray-500">
										Member is paying {curr(details.PaymentAmount)} per month at {details.InterestRate}%
									</p>
								</div>
								<div class="mt-2 text-sm text-gray-700">
									<p>
										This loan started at {curr(details.OriginalAmount)}. The {details.Make}
										{details.Model}'s current value is
										<span class="font-medium">{curr(details.PricePredictionWithDetails)} </span>
										(Estimate: {curr(details.PricePredictionLow)} to {curr(
											details.PricePredictionHigh
										)})
									</p>
								</div>
							</div>
						</div>
					</div>
				</li>
				{#each data.payments as payment, i}
					{#if i > 0}
						{#if i === Number(details.CurrentPaymentNumber)}
							<li transition:slide>
								<div class="relative pb-8">
									<span
										class="absolute left-5 top-5 -ml-px h-full w-0.5 bg-gray-200"
										aria-hidden="true"
									></span>
									<div class="relative flex items-start space-x-3">
										<div class="relative">
											<img
												class="flex h-10 w-10 items-center object-center object-cover justify-center rounded-full bg-gray-400 ring-8 ring-white"
												src="https://images.unsplash.com/photo-1509783236416-c9ad59bae472?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
												alt=""
											/>
										</div>
										<div class="min-w-0 flex-1">
											<div>
												<div class="text-sm">
													<span class="text-xl font-medium text-emerald-700"> NEXT PAYMENT</span>
												</div>
												<p class="mt-0.5 text-sm text-gray-700">
													Payment #{i} is the members next payment.
												</p>
											</div>
										</div>
									</div>
								</div>
							</li>
						{/if}
						<!-- Start Loan Payment -->
						{#if showPayment}
							<li transition:slide>
								<div class="relative pb-8">
									<span
										class="absolute left-5 top-5 -ml-px h-full w-0.5 bg-gray-200"
										aria-hidden="true"
									></span>
									<div class="relative flex items-start space-x-3">
										<div>
											<div class="relative px-1">
												<div
													class="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 ring-8 ring-white"
												>
													<svg
														xmlns="http://www.w3.org/2000/svg"
														viewBox="0 0 20 20"
														fill="currentColor"
														class="w-5 h-5 text-gray-500"
													>
														<path
															d="M10.75 10.818v2.614A3.13 3.13 0 0 0 11.888 13c.482-.315.612-.648.612-.875 0-.227-.13-.56-.612-.875a3.13 3.13 0 0 0-1.138-.432ZM8.33 8.62c.053.055.115.11.184.164.208.16.46.284.736.363V6.603a2.45 2.45 0 0 0-.35.13c-.14.065-.27.143-.386.233-.377.292-.514.627-.514.909 0 .184.058.39.202.592.037.051.08.102.128.152Z"
														/>
														<path
															fill-rule="evenodd"
															d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-8-6a.75.75 0 0 1 .75.75v.316a3.78 3.78 0 0 1 1.653.713c.426.33.744.74.925 1.2a.75.75 0 0 1-1.395.55 1.35 1.35 0 0 0-.447-.563 2.187 2.187 0 0 0-.736-.363V9.3c.698.093 1.383.32 1.959.696.787.514 1.29 1.27 1.29 2.13 0 .86-.504 1.616-1.29 2.13-.576.377-1.261.603-1.96.696v.299a.75.75 0 1 1-1.5 0v-.3c-.697-.092-1.382-.318-1.958-.695-.482-.315-.857-.717-1.078-1.188a.75.75 0 1 1 1.359-.636c.08.173.245.376.54.569.313.205.706.353 1.138.432v-2.748a3.782 3.782 0 0 1-1.653-.713C6.9 9.433 6.5 8.681 6.5 7.875c0-.805.4-1.558 1.097-2.096a3.78 3.78 0 0 1 1.653-.713V4.75A.75.75 0 0 1 10 4Z"
															clip-rule="evenodd"
														/>
													</svg>
												</div>
											</div>
										</div>
										<div class="min-w-0 flex-1 py-0">
											<div class="text-sm leading-8 text-gray-500">
												<span class="mr-0.5">
													Payment {i} on
													<span class="font-medium text-gray-900 dark:text-white">{payment.am.date}</span>
													&mdash; Estimated Value: {curr(payment.am.currentVehicleValue)}
												</span>
											</div>
										</div>
									</div>
								</div>
							</li>
						{/if}
						<!-- End Loan Payment -->
						<!-- Start Stage -->
						{#if showStage}
							<li transition:slide>
								<div class="relative pb-8">
									<span
										class="absolute left-5 top-5 -ml-px h-full w-0.5 bg-gray-200"
										aria-hidden="true"
									></span>
									<div class="relative flex items-start space-x-3">
										<div>
											<div class="relative px-1">
												<div
													class="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 ring-8 ring-white"
												>
													<svg
														class="h-5 w-5 text-gray-500"
														viewBox="0 0 20 20"
														fill="currentColor"
														aria-hidden="true"
													>
														<path
															fill-rule="evenodd"
															d="M5.5 3A2.5 2.5 0 003 5.5v2.879a2.5 2.5 0 00.732 1.767l6.5 6.5a2.5 2.5 0 003.536 0l2.878-2.878a2.5 2.5 0 000-3.536l-6.5-6.5A2.5 2.5 0 008.38 3H5.5zM6 7a1 1 0 100-2 1 1 0 000 2z"
															clip-rule="evenodd"
														/>
													</svg>
												</div>
											</div>
										</div>
										<div class="min-w-0 flex-1 py-0">
											<div class="text-sm leading-8 text-gray-500">
												<span class="mr-0.5">
													Loan
													<a href="." class="font-medium text-gray-900 dark:text-white">#{details.AccountNumber}</a>
													is in funnel phase
												</span>
												<span class="mr-0.5">
													<a
														href="."
														class="inline-flex items-center gap-x-1.5 rounded-full px-2 py-1 text-xs font-medium text-gray-900 dark:text-white ring-1 ring-inset ring-gray-200"
													>
														<svg
															class="h-1.5 w-1.5 fill-emerald-500"
															viewBox="0 0 6 6"
															aria-hidden="true"
														>
															<circle cx="3" cy="3" r="3" />
														</svg>
														{payment.am.funnelPhase}
													</a>
												</span>
											</div>
										</div>
									</div>
								</div>
							</li>
						{/if}
						<!-- End Stage -->
						<!-- Start Calculations-->
						{#if showCalcs}
							<li transition:slide>
								<div class="relative pb-8">
									<span
										class="absolute left-5 top-5 -ml-px h-full w-0.5 bg-gray-200"
										aria-hidden="true"
									></span>
									<div class="relative flex items-start space-x-3">
										<div>
											<div class="relative px-1">
												<div
													class="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 ring-8 ring-white"
												>
													<svg
														xmlns="http://www.w3.org/2000/svg"
														viewBox="0 0 20 20"
														fill="currentColor"
														class="w-5 h-5"
														class:text-gray-500={Number(payment.am.monthlyLTV) <= 0.9}
														class:text-red-700={Number(payment.am.monthlyLTV) > 0.9}
													>
														<path
															fill-rule="evenodd"
															d="M10 1c-1.716 0-3.408.106-5.07.31C3.806 1.45 3 2.414 3 3.517V16.75A2.25 2.25 0 0 0 5.25 19h9.5A2.25 2.25 0 0 0 17 16.75V3.517c0-1.103-.806-2.068-1.93-2.207A41.403 41.403 0 0 0 10 1ZM5.99 8.75A.75.75 0 0 1 6.74 8h.01a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-.75.75h-.01a.75.75 0 0 1-.75-.75v-.01Zm.75 1.417a.75.75 0 0 0-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 0 0 .75-.75v-.01a.75.75 0 0 0-.75-.75h-.01Zm-.75 2.916a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-.75.75h-.01a.75.75 0 0 1-.75-.75v-.01Zm.75 1.417a.75.75 0 0 0-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 0 0 .75-.75v-.01a.75.75 0 0 0-.75-.75h-.01Zm1.417-5.75a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-.75.75h-.01a.75.75 0 0 1-.75-.75v-.01Zm.75 1.417a.75.75 0 0 0-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 0 0 .75-.75v-.01a.75.75 0 0 0-.75-.75h-.01Zm-.75 2.916a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-.75.75h-.01a.75.75 0 0 1-.75-.75v-.01Zm.75 1.417a.75.75 0 0 0-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 0 0 .75-.75v-.01a.75.75 0 0 0-.75-.75h-.01Zm1.42-5.75a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-.75.75h-.01a.75.75 0 0 1-.75-.75v-.01Zm.75 1.417a.75.75 0 0 0-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 0 0 .75-.75v-.01a.75.75 0 0 0-.75-.75h-.01Zm-.75 2.916a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-.75.75h-.01a.75.75 0 0 1-.75-.75v-.01Zm.75 1.417a.75.75 0 0 0-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 0 0 .75-.75v-.01a.75.75 0 0 0-.75-.75h-.01ZM12.5 8.75a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-.75.75h-.01a.75.75 0 0 1-.75-.75v-.01Zm.75 1.417a.75.75 0 0 0-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 0 0 .75-.75v-.01a.75.75 0 0 0-.75-.75h-.01Zm0 2.166a.75.75 0 0 1 .75.75v2.167a.75.75 0 1 1-1.5 0v-2.167a.75.75 0 0 1 .75-.75ZM6.75 4a.75.75 0 0 0-.75.75v.5c0 .414.336.75.75.75h6.5a.75.75 0 0 0 .75-.75v-.5a.75.75 0 0 0-.75-.75h-6.5Z"
															clip-rule="evenodd"
														/>
													</svg>
												</div>
											</div>
										</div>
										<div class="min-w-0 flex-1 py-1.5">
											<div class="text-sm text-gray-500">
												Paid <span class="font-medium">{curr(payment.am.totalPayment, true)}</span>
												(Principal: {curr(payment.am.principal, true)} Interest: {curr(
													payment.am.interest,
													true
												)})

												<span
													class="font-medium"
													class:text-red-700={Number(payment.am.monthlyLTV) > 0.9}
												>
													LTV: {Math.round(payment.am.monthlyLTV * 100)}%
												</span>
												&mdash; Balance: {curr(payment.am.remainingBalance, true)}
												Total Interest: {curr(payment.am.cumulativeInterest, true)}
											</div>
										</div>
									</div>
								</div>
							</li>
						{/if}
						<!-- End Calculations -->
						<!-- Start Milestone -->
						{#if Object.keys(payment.milestone).length}
							<li transition:slide>
								<div class="relative pb-8">
									<span
										class="absolute left-5 top-5 -ml-px h-full w-0.5 bg-gray-200"
										aria-hidden="true"
									></span>
									<div class="relative flex items-start space-x-3">
										<div class="relative">
											<img
												class="flex h-10 w-10 items-center object-center object-cover justify-center rounded-full bg-gray-400 ring-8 ring-white"
												src="/giorgio-trovato-WyxqQpyFNk8-unsplash.jpg"
												alt=""
											/>
										</div>
										<div class="min-w-0 flex-1">
											<div>
												<div class="text-sm">
													<span class="font-medium text-gray-900 dark:text-white"> MILESTONE</span>
												</div>
												<p class="mt-0.5 text-sm text-gray-500">Loan status:</p>
											</div>
											<div class="mt-2 text-sm text-emerald-700">
												<p
													class="font-medium text-lg border border-dashed border-emerald-500/35 rounded-md p-2 bg-emerald-50/15"
												>
													{payment.milestone?.description}
												</p>
											</div>
										</div>
									</div>
								</div>
							</li>
						{/if}
						<!-- End Milestone -->
						<!-- Start Action -->
						{#if Object.keys(payment.action).length}
							<li transition:slide>
								<div class="relative pb-8">
									<span
										class="absolute left-5 top-5 -ml-px h-full w-0.5 bg-gray-200"
										aria-hidden="true"
									></span>
									<div class="relative flex items-start space-x-3">
										<div class="relative">
											<img
												class="flex h-10 w-10 items-center object-center object-cover justify-center rounded-full bg-gray-400 ring-8 ring-white"
												src="/joshua-earle-3yLpryRajZs-unsplash.jpg"
												alt=""
											/>
										</div>
										<div class="min-w-0 flex-1">
											<div>
												<div class="text-sm">
													<span class="font-medium text-gray-900 dark:text-white"> OUTREACH ACTION</span>
												</div>
												<p class="mt-0.5 text-sm text-gray-500">Click below to execute:</p>
											</div>
											<div class="mt-2 text-sm text-gray-700">
												<button
													on:click={getContent(payment.action?.id)}
													type="button"
													class="inline-flex items-center gap-x-1.5 rounded-md bg-emerald-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
												>
													{#if gettingContent}
														<img src="/spinner.svg" alt="" />
													{:else}
														<svg
															class="-ml-0.5 h-5 w-5"
															viewBox="0 0 20 20"
															fill="currentColor"
															aria-hidden="true"
														>
															<path
																fill-rule="evenodd"
																d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
																clip-rule="evenodd"
															/>
														</svg>
													{/if}
													{payment.action?.Action}
												</button>
											</div>
										</div>
									</div>
								</div>
							</li>
						{/if}
					{/if}
				{/each}
				<li>
					<div class="relative pb-8 mb-8">
						<div class="relative flex items-start space-x-3">
							<div class="relative">
								<img
									class="flex h-10 w-10 items-center justify-center rounded-full bg-gray-400 ring-8 ring-white"
									src="https://images.unsplash.com/photo-1509783236416-c9ad59bae472?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
									alt=""
								/>

								<span class="absolute -bottom-0.5 -right-1 rounded-tl bg-white px-0.5 py-px">
									<svg viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 text-emerald-700">
										<path
											fill-rule="evenodd"
											d="M4.93 2.31a41.401 41.401 0 0 1 10.14 0C16.194 2.45 17 3.414 17 4.517V17.25a.75.75 0 0 1-1.075.676l-2.8-1.344-2.8 1.344a.75.75 0 0 1-.65 0l-2.8-1.344-2.8 1.344A.75.75 0 0 1 3 17.25V4.517c0-1.103.806-2.068 1.93-2.207Zm4.822 3.997a.75.75 0 1 0-1.004-1.114l-2.5 2.25a.75.75 0 0 0 0 1.114l2.5 2.25a.75.75 0 0 0 1.004-1.114L8.704 8.75h1.921a1.875 1.875 0 0 1 0 3.75.75.75 0 0 0 0 1.5 3.375 3.375 0 1 0 0-6.75h-1.92l1.047-.943Z"
											clip-rule="evenodd"
										/>
									</svg>
								</span>
							</div>
							<div class="min-w-0 flex-1">
								<div>
									<div class="text-sm">
										<a href="#" class="font-medium text-gray-900 dark:text-white">New Member Loan</a>
									</div>
									<p class="mt-0.5 text-sm text-gray-500">Before the end of this loan</p>
								</div>
								<div class="mt-2 text-sm text-gray-700">
									<p>
										With this outreach plan based on data analysis of each of your members, you will
										retain this member in a new auto loan. The member is happy and you are happy.
									</p>
								</div>
							</div>
						</div>
					</div>
				</li>
			</ul>
		</div>

		<DealerData dealerhistory={vehicle.dealerhistory} />
	</div>
</div>
