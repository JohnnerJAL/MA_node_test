## MA_node_test

# Pull repository
git clone
cd MA_node_test

# Execute the next commands in bash
docker-compose build
docker-compose up

# Send request to http://localhost:3000/postalcodes/save_coordinates_file with:
Multipart Form
name: coordinates
value: file.csv

Headers:
Content-Type: multipart/form-data