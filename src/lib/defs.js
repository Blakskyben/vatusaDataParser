const Axios = require('axios')
        function getUsers(instance) {
            let data;
            let clientArr = [];
            let obj = {};
            instance.get("/users", (req, res) => {
                Axios.get("http://us.data.vatsim.net/vatsim-data.json")
                    .then(AxiosRes => {
                        data = AxiosRes.status == 200 ? AxiosRes.data["clients"] : {
                            status: "Dead"
                        }
            
                        for (const client of data) {
            
                            obj[client.cid] = {
                                name: client.realname,
                                connectionType: client.clienttype,
                                callsign: client.callsign
                            };
                            clientArr.push(obj);
                        }
            
                        res.json(clientArr);
            
                    })
            });
        }
    

module.exports.getUsers = getUsers;