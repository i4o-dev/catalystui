import type { FC, ReactNode } from 'react'
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'
import cx from 'classnames'
import { ChevronRightIcon } from '@radix-ui/react-icons'

interface DropdownMenuItem {
	icon?: ReactNode
	label?: string | ReactNode
	link?: string
	onSelect?: (e: Event) => void
	shortcut?: string
	type: 'item' | 'separator' | 'submenu'
	submenu?: DropdownMenuItem[]
}

interface DropdownMenuProps {
	align?: 'end' | 'start' | 'center' | undefined
	items: DropdownMenuItem[]
	sideOffset?: number
	trigger: ReactNode
}

const DropdownMenu: FC<DropdownMenuProps> = ({
	align = 'end',
	items,
	sideOffset = 5,
	trigger,
}) => {
	return (
		<div className='cui-relative cui-inline-flex cui-text-left [&_div["data-radix-popper-content-wrapper"]]:!cui-z-100'>
			<DropdownMenuPrimitive.Root>
				<DropdownMenuPrimitive.Trigger>
					{trigger}
				</DropdownMenuPrimitive.Trigger>
				<DropdownMenuPrimitive.Portal>
					<DropdownMenuPrimitive.Content
						align={align}
						asChild={true}
						className={cx(
							' radix-side-top:cui-animate-slide-up radix-side-bottom:cui-animate-slide-down',
							'cui-w-48 cui-rounded-lg cui-p-1 cui-shadow-md md:cui-w-56',
							'cui-bg-white dark:cui-bg-gray-800'
						)}
						sideOffset={sideOffset}
					>
						<div>
							{items.map(
								(
									{
										label,
										link,
										icon,
										onSelect,
										shortcut,
										type,
										submenu,
									},
									i
								) => {
									if (type === 'separator') {
										return (
											<DropdownMenuPrimitive.Separator
												key={i}
												className='cui-my-1 cui-h-px cui-bg-gray-200 dark:cui-bg-gray-700'
											/>
										)
									} else if (type === 'submenu') {
										return (
											<DropdownMenuPrimitive.Sub key={i}>
												<DropdownMenuPrimitive.SubTrigger
													className={cx(
														'cui-flex cui-cursor-pointer cui-select-none cui-items-center cui-space-x-2 cui-rounded-md cui-px-2 cui-py-2 cui-outline-none',
														'cui-text-gray-600 focus:cui-bg-gray-50 dark:cui-text-gray-400 dark:focus:cui-bg-gray-900'
													)}
												>
													<div className='cui-basis-4'>
														{icon}
													</div>
													<span className='cui-text-sm cui-font-normal cui-flex-1'>
														{label}
													</span>
													<ChevronRightIcon className='cui-w-4 cui-h-4' />
												</DropdownMenuPrimitive.SubTrigger>
												<DropdownMenuPrimitive.SubContent
													className={cx(
														' radix-side-top:cui-animate-slide-up radix-side-bottom:cui-animate-slide-down',
														'cui-w-48 cui-rounded-lg cui-px-1.5 cui-py-1 cui-shadow-lg md:cui-w-56',
														'cui-bg-white dark:cui-bg-gray-800'
													)}
													sideOffset={sideOffset}
													alignOffset={-5}
												>
													{submenu?.map(
														(
															{
																label,
																link,
																icon,
																onSelect,
																shortcut,
																type,
															},
															j
														) => {
															if (
																type ===
																'separator'
															) {
																return (
																	<DropdownMenuPrimitive.Separator
																		key={`${i}-${j}`}
																		className='cui-my-1 cui-h-px cui-bg-gray-200 dark:cui-bg-gray-700'
																	/>
																)
															} else {
																return link ? (
																	<a
																		key={`${i}-${j}`}
																		href={
																			link
																		}
																	>
																		<DropdownMenuPrimitive.Item
																			key={
																				i
																			}
																			className={cx(
																				'cui-flex cui-cursor-pointer cui-select-none cui-items-center cui-space-x-2 cui-rounded-md cui-px-2 cui-py-2 cui-outline-none',
																				'cui-text-gray-600 focus:cui-bg-gray-50 dark:cui-text-gray-400 dark:focus:cui-bg-gray-900'
																			)}
																			onSelect={
																				onSelect
																			}
																		>
																			<div className='cui-basis-4'>
																				{
																					icon
																				}
																			</div>
																			<span className='cui-text-sm cui-font-normal cui-flex-1'>
																				{
																					label
																				}
																			</span>
																			{shortcut && (
																				<div className='cui-text-xs cui-font-normal cui-text-gray-400 dark:cui-text-gray-600'>
																					{
																						shortcut
																					}
																				</div>
																			)}
																		</DropdownMenuPrimitive.Item>
																	</a>
																) : (
																	<DropdownMenuPrimitive.Item
																		key={`${i}-${j}`}
																		className={cx(
																			'cui-flex cui-cursor-pointer cui-select-none cui-items-center cui-space-x-2 cui-rounded-md cui-px-2 cui-py-2 cui-outline-none',
																			'cui-text-gray-600 focus:cui-bg-gray-50 dark:cui-text-gray-400 dark:focus:cui-bg-gray-900'
																		)}
																		onSelect={
																			onSelect
																		}
																	>
																		<div className='cui-basis-4'>
																			{
																				icon
																			}
																		</div>
																		<span className='cui-text-sm cui-font-normal cui-flex-1'>
																			{
																				label
																			}
																		</span>
																		{shortcut && (
																			<div className='cui-text-xs cui-font-normal cui-text-gray-400 dark:cui-text-gray-600'>
																				{
																					shortcut
																				}
																			</div>
																		)}
																	</DropdownMenuPrimitive.Item>
																)
															}
														}
													)}
												</DropdownMenuPrimitive.SubContent>
											</DropdownMenuPrimitive.Sub>
										)
									} else {
										return link ? (
											<a
												key={i}
												href={link}
												target='_blank'
												rel='noopener noreferrer'
											>
												<DropdownMenuPrimitive.Item
													key={i}
													className={cx(
														'cui-flex cui-cursor-pointer cui-select-none cui-items-center cui-space-x-2 cui-rounded-md cui-px-2 cui-py-2 cui-outline-none',
														'cui-text-gray-600 focus:cui-bg-gray-50 dark:cui-text-gray-400 dark:focus:cui-bg-gray-900'
													)}
													onSelect={onSelect}
												>
													<div className='cui-basis-4'>
														{icon}
													</div>
													<span className='cui-text-sm cui-font-normal cui-flex-1'>
														{label}
													</span>
													{shortcut && (
														<div className='cui-text-xs cui-font-normal cui-text-gray-400 dark:cui-text-gray-600'>
															{shortcut}
														</div>
													)}
												</DropdownMenuPrimitive.Item>
											</a>
										) : (
											<DropdownMenuPrimitive.Item
												key={i}
												className={cx(
													'cui-flex cui-cursor-pointer cui-select-none cui-items-center cui-space-x-2 cui-rounded-md cui-px-2 cui-py-2 cui-outline-none',
													'cui-text-gray-600 focus:cui-bg-gray-50 dark:cui-text-gray-400 dark:focus:cui-bg-gray-900'
												)}
												onSelect={onSelect}
											>
												<div className='cui-basis-4'>
													{icon}
												</div>
												<span className='cui-text-sm cui-font-normal cui-flex-1'>
													{label}
												</span>
												{shortcut && (
													<div className='cui-text-xs cui-font-normal cui-text-gray-400 dark:cui-text-gray-600'>
														{shortcut}
													</div>
												)}
											</DropdownMenuPrimitive.Item>
										)
									}
								}
							)}
						</div>
					</DropdownMenuPrimitive.Content>
				</DropdownMenuPrimitive.Portal>
			</DropdownMenuPrimitive.Root>
		</div>
	)
}

export default DropdownMenu
