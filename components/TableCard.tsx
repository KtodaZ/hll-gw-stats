import { Box, Table } from '@mui/joy';
import Card from '@mui/joy/Card';
import React from 'react';

interface TableCardProps {
    title: string;
    description: string;
    columnHeaders: string[];
    data: {
        [key: string]: string;
    }[];
}

const TableCard: React.FC<TableCardProps> = ({ title, description, columnHeaders, data }) => {
    return (
        <Card>
            <div>
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
            <Box maxHeight={430} sx={{overflowY: 'auto'}}>
                <Table>
                    <thead>
                        <tr>
                            <th>#</th>
                            {columnHeaders.map((header, index) => (
                                <th key={index}>{header}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td> {/* Display the index */}
                                {Object.values(item).map((value, index) => (
                                    <td key={index}>{value}</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Box>
            
        </Card>
    );
};

export default TableCard;
