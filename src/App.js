import { Component } from "react";
class App extends Component{
    state={
        players:[]
    }


    componentDidMount(){
        const players=[
            {
                firsName:"Mbappe",
                age:23,
                club:"PSJ",
                value: 160,
            },
            {
                firsName:"Salah",
                age:30,
                club:"Liverpool",
                value: 100,
            },
            {
                firsName:"Lukaku",
                age:29,
                club:"Chelsea",
                value: 100,
            },
            {
                firsName:"Neymar",
                age:31,
                club:"PSJ",
                value: 90,
            }
        ];
        this.setState({
            players,
        })
    }
    removePlayer=(index)=>{
        const players=this.state.players;
        players.splice(index,1);
        this.setState({
            players,
        })
    }

    render(){
        const{players}=this.state;
        return<div className="market" style={{backgroundColor:"#fff",margin:"15px",borderRadius:"12px",padding:"5px"}}>
                 <div className="container">
                    <h1>TRANSFER market</h1>
                    <div className="row">
                        <div className="col">
                            <table className="table table-hover  ">
                                <thead className="thead-dark">
                                    <tr>
                                        
                                        
                                        <th>№</th>
                                        <th>Name</th>
                                        <th>Age</th>
                                        <th>Club</th>
                                        <th>Market value</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        players.map((item,index)=> <tr>
                                            <td>{index + 1}</td>
                                            <td>{item.firsName}</td>
                                            <td>{item.age}</td>
                                            <td>{item.club}</td>
                                            <td> <span className="badge bg-primary"  >
                                                {item.value}.00mln
                                                </span></td>
                                                <td>
                                                    <button className="btn btn-danger " onClick={()=>this.removePlayer(index)}>Delete</button>
                                                </td>
                                        </tr>)
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                 </div>
            </div>
        

    }
}
export default App;