import { hours } from '../data';

export default function ReportTable(props) {
    let total = 0

    function grandTotal(totalArr) {
        let totalTotal = 0;
        for(let i = 0; i < totalArr.length; i++){
            totalTotal += totalArr[i];
        }
        return totalTotal
    }
    function TotalFooter() {
        let totalArr = [];
        for(let i = 0; i < hours.length; i++){
            totalArr.push(0);
          }
        for(let i = 0; i < props.location.length; i++){
            let currentCity = props.location[i];
            console.log(currentCity)

            for(let j = 0; j < currentCity.hourlySales.length; j++){
                
                totalArr[j] += currentCity.hourlySales[j]
            }
        }
        console.log(totalArr)
        return totalArr
    }

    let footerTotal = TotalFooter()
    let totalTotal = grandTotal(footerTotal)


    if (props.location == 0) {
        return (
            <h2 className='flex justify-center space-y-8 m-5'>No Cookie Stands Available</h2>
        )
    } else {
        return (
            <div className='flex justify-center'>
                <table className='table-auto text-center bg-emerald-200 rounded-lg m-4 p-4 space-x-1 space-y-3'>
                    <thead className=''>
                        <tr className='justify-center'>
                            <th className="border border-black px-6">Location</th>
                            {hours.map(hour => (
                                <th key={hour.id} className="border border-black">{hour}</th>
                            ))}
                            <th className='border border-black'>Totals</th>

                        </tr>
                    </thead>
                    <tbody>
                        {props.location.map(loc => (
                            <tr key={loc.id}>
                                
                                <th className='border border-black px-6'>{loc.location}</th>
                                {loc.hourlySales.map(hour => (
                                    <td className='border border-black' key={hour.id}>{hour} </td> 
                                    ))}
                                <td className='border border-black'>{total = loc.hourlySales.reduce((a, b) => a + b, 0)}</td>
                            </tr>
                            
                        ))}
                    </tbody>
                    <tfoot>
                        <tr>
                            <th className='border border-black px-6'>Totals</th>
                            {footerTotal.map(total => (
                                <td className='border border-black' key={total.id}>{total}</td>
                            ))}
                            <td className='border border-black'>{totalTotal}</td>
                            
                        </tr>
                    </tfoot>
                </table>
            </div>
        )
    }
}

