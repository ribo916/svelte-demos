<script lang="ts">
	import { curr, commas } from '$lib/helpers';
	export let dealerhistory;
</script>

<div>
	<div class="sm:flex sm:items-center">
		<div class="sm:flex-auto">
			<h1 class="text-2xl font-semibold leading-6 text-gray-900 dark:text-white">Dealer History</h1>
			<p class="mt-2 text-sm text-gray-700">
				Below is the current and historical dealer listings for this VIN.
			</p>
		</div>
	</div>
	<div class="mt-8 flow-root">
		<div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
			<div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
				<table class="min-w-full divide-y divide-gray-300">
					<thead>
						<tr>
							<th
								scope="col"
								class="whitespace-nowrap py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 dark:text-white sm:pl-0"
								>Price</th
							>
							<th
								scope="col"
								class="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-white"
								>Last Seen</th
							>
							<th
								scope="col"
								class="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-white"
								>Miles</th
							>
							<th
								scope="col"
								class="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-white"
								>Dealer</th
							>
							<th
								scope="col"
								class="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-white"
								>Location</th
							>
							<th scope="col" class="relative whitespace-nowrap py-3.5 pl-3 pr-4 sm:pr-0">
								<span class="sr-only">Link</span>
							</th>
						</tr>
					</thead>
					<tbody class="divide-y divide-gray-200">
						{#each dealerhistory as listing}
							<tr>
								<td class="whitespace-nowrap py-2 pl-4 pr-3 text-sm text-gray-500 sm:pl-0"
									>{#if listing.price}{curr(listing.price)}{/if}</td
								>
								<td class="whitespace-nowrap px-2 py-2 text-sm font-medium text-gray-900 dark:text-white"
									>{listing.lastseen}</td
								>
								<td class="whitespace-nowrap px-2 py-2 text-sm text-gray-900 dark:text-white"
									>{#if listing.miles}{commas(listing.miles)}{/if}</td
								>
								<td class="whitespace-nowrap px-2 py-2 text-sm text-gray-500"
									>{listing.dealername}</td
								>
								<td class="whitespace-nowrap px-2 py-2 text-sm text-gray-500"
									>{listing.dealercity}, {listing.dealerstate}</td
								>
								<td
									class="relative whitespace-nowrap py-2 pl-3 pr-4 text-right text-sm font-medium sm:pr-0"
								>
									<a href={listing.vdpurl} class="text-emerald-600 hover:text-emerald-900"
										>Link<span class="sr-only">, {listing.dealername}</span></a
									>
								</td>
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
		</div>
	</div>
</div>
