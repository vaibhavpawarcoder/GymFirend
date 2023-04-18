import React from 'react'
import styled from 'styled-components'
import Page from './components/Page'
import Register from './components/Register'

const Schedule = () => {
  return (
    <Wrapper>
      <Page page='Schedule' pagename='Schedule' />
      <div className='container mt-4 mb-5'>
        <div className='row mt-5'>
          <div className='col-md-11 mt-5'>

            <div class="table-responsive">
              
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">MONDAY</th>
                  <th scope="col">TUESDAY</th>
                  <th scope="col">WEDNESDAY</th>
                  <th scope="col">THURSDAY</th>
                  <th scope="col">FRIDAY</th>
                  <th scope="col">SATURDAY</th>
                  <th scope="col">SUNDAY</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">10.00</th>
                  <td></td>
                  <td className='color-td'>Gym: 10-11</td>
                  <td></td>
                  <td className='color-td'>Yoga 10-12</td>
                  <td></td>
                  <td className='color-td'>Body 10-12</td>
                  <td></td>
                  
                </tr>
                <tr>
                <th scope="row">14.00</th>
                  <td className='color-td'>Gym: 10-11</td>
                  <td></td>
                  <td className='color-td'>Yoga 10-12</td>
                  <td></td>
                  <td className='color-td'>Body 10-12</td>
                  <td></td>
                  <td className='color-td'>CARDIO 10-11</td>
                </tr>
                <tr>
                <th scope="row">16.00</th>
                  <td className='color-td'>Gym: 16-17</td>
                  <td></td>
                  <td className='color-td'>Yoga 16-18</td>
                  <td></td>
                  <td className='color-td'>Body 16-18</td>
                  <td></td>
                  <td className='color-td'>CARDIO 16-17</td>
                </tr>
                <tr>
                <th scope="row">18.00</th>
                  <td></td>
                  <td className='color-td'>Gym: 18-20</td>
                  <td></td>
                  <td className='color-td'>Gym: 10-11</td>
                  <td></td>
                  <td className='color-td'>Yoga 10-12</td>
                  <td className='color-td'>Body 10-12</td>
                </tr>
                <tr>
                <th scope="row">20.00</th>
                  
                  <td></td>
                  <td className='color-td'>Yoga 20-21</td>
                  <td className='color-td'>Gym: 20-21</td>
                  <td></td>
                  <td className='color-td'>Body 20-21</td>
                  <td className='color-td'>CARDIO 20-21</td>
                  <td></td>
                </tr>
              </tbody>
            </table>
            </div>

          </div>
        </div>
      </div>

      <Register />
    </Wrapper>
  )
}
const Wrapper = styled.section`
td{
padding:20px;
boredr:1px solid black;
cursor:pointer;
transition:0.5s all;
}
.color-td:hover{
  background-color: #f15d44;
  color:white;
}
th{
  background-color:#f2f2f2;
}
`;

export default Schedule