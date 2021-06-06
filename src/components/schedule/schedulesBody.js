import React from 'react'
import Schedule from './schedule'
import {TodayIs} from '../../utils/todayIs'
import { Wrapper, Container } from './schedulesBody_style'



const SchedulesBody = ({data}) =>{
	const schedules = data.data;
	
	const schedule_render = (schedules,title) =>{
		return (
			<Container>
				<h1 className="time_title">{title}</h1>
				<div className="time_schedules">
					{schedules.map(node=>
										<Schedule data={node} key={node.id} />
									)}
				</div>
			</Container>
	)};
	return(
		<Wrapper>
			<h1 className="today">Today is <TodayIs /></h1>
			{schedules.morning.nodes.length>0?
									schedule_render(schedules.morning.nodes, "Morning")				
									:
									null
			}
			{schedules.noon.nodes.length>0?
									schedule_render(schedules.noon.nodes, "Noon")				
									:
									null
			}
			{schedules.afterNoon.nodes.length>0?
									schedule_render(schedules.afterNoon.nodes, "Evening")				
									:
									null
			}
			{schedules.night.nodes.length>0?
									schedule_render(schedules.night.nodes, "Late")				
									:
									null
			}
			
		</Wrapper>
	)
}

export default SchedulesBody