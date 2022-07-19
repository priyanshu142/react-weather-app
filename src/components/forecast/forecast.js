import {
	Accordion,
	AccordionItemHeading,
	AccordionItem,
	AccordionItemPanel,
	AccordionItemButton,
} from 'react-accessible-accordion'

import './forecast.css'
const WEEK_DAYS = [
	'monday',
	'tuesday',
	'wednesday',
	'thursday',
	'friday',
	'saturday',
	'sunday',
]
const Forecast = ({ data }) => {
	const dayInAWeek = new Date().getDay()
	const forcastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(
		WEEK_DAYS.slice(0, dayInAWeek),
	)
	return (
		<>
			<label className='title'>daily</label>
			<Accordion allowZeroExpanded>
				{data.list.splice(0, 7).map((item, idx) => (
					<AccordionItem key={idx}>
						<AccordionItemHeading>
							<AccordionItemButton>
								<div className='daily-item'>
									<img
										src={`icons/${item.weather[0].icon}.png`}
										className='icon-small'
										alt='weather'
									/>
									<label className='day'>{forcastDays[idx]}</label>
									<label className='description '>
										{item.weather[0].description}
									</label>
									<label className='min-max'>
										{Math.round(item.main.temp_min)}
										°C/ {Math.round(item.main.temp_max)}°C
									</label>
								</div>
							</AccordionItemButton>
						</AccordionItemHeading>
						<AccordionItemPanel>
							<div className='daily-details-grid'>
								<div className='daily-details-grid-item'>
									<label>presssure</label>
									<label>{item.main.pressure}</label>
								</div>
								<div className='daily-details-grid-item'>
									<label>humidity</label>
									<label>{item.main.humidity}</label>
								</div>
								<div className='daily-details-grid-item'>
									<label>clouds</label>
									<label>{item.clouds.all}%</label>
								</div>
								<div className='daily-details-grid-item'>
									<label>wind speed</label>
									<label>{item.wind.speed}m/s</label>
								</div>
								<div className='daily-details-grid-item'>
									<label>sea level</label>
									<label>{item.main.sea_level}m</label>
								</div>
								<div className='daily-details-grid-item'>
									<label>feels like</label>
									<label>{Math.round(item.main.feel_like)}</label>
								</div>
							</div>
						</AccordionItemPanel>
					</AccordionItem>
				))}
			</Accordion>
		</>
	)
}
export default Forecast
