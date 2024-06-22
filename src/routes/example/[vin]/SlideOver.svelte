<script lang="ts">
	import classes from 'svelte-transition-classes';
	import { slideOpen, generatedContent } from './stores';

	console.log($generatedContent);

	function close() {
		$slideOpen = false;
	}
</script>

{#if $slideOpen}
	<div class="relative z-10" aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
		<div class="fixed inset-0 bg-emerald-50/80"></div>

		<div class="fixed inset-0 overflow-hidden">
			<div class="absolute inset-0 overflow-hidden">
				<div class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
					<div
						in:classes={{
							duration: 700,
							base: 'transform transition ease-in-out duration-500 sm:duration-700',
							from: 'translate-x-full',
							to: 'translate-x-0'
						}}
						out:classes={{
							duration: 700,
							base: 'transform transition ease-in-out duration-500 sm:duration-700',
							from: 'translate-x-0',
							to: 'translate-x-full'
						}}
						class="pointer-events-auto w-screen max-w-md"
					>
						<div class="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
							<div class="bg-emerald-700 px-4 py-6 sm:px-6">
								<div class="flex items-center justify-between">
									<h2 class="text-base font-semibold leading-6 text-white" id="slide-over-title">
										Sample Content
									</h2>
									<div class="ml-3 flex h-7 items-center">
										<button
											on:click={close}
											type="button"
											class="relative rounded-md bg-emerald-700 text-emerald-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
										>
											<span class="absolute -inset-2.5"></span>
											<span class="sr-only">Close panel</span>
											<svg
												class="h-6 w-6"
												fill="none"
												viewBox="0 0 24 24"
												stroke-width="1.5"
												stroke="currentColor"
												aria-hidden="true"
											>
												<path
													stroke-linecap="round"
													stroke-linejoin="round"
													d="M6 18L18 6M6 6l12 12"
												/>
											</svg>
										</button>
									</div>
								</div>
								<div class="mt-1">
									<p class="text-sm text-emerald-300">
										This content is automatically created by AI. Your staff can edit the content
										before sending to the member. Distribution is automated over email, text message
										(SMS), snail mail, et cetera.
									</p>
								</div>
							</div>
							<div class="relative flex-1 px-4 py-6 sm:px-6">
								{@html $generatedContent}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
{/if}
