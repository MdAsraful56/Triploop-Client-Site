import { Trash } from 'lucide-react';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '../../components/ui/table';
import { useGetTourTypesQuery } from '../../redux/features/tour/tour.api';

const AddTourType = () => {
    const { data } = useGetTourTypesQuery(undefined);
    console.log(data);

    return (
        <div className='w-full max-w-7xl mx-auto px-5'>
            <div className='flex justify-between my-5'>
                <h2 className='text-lg font-medium'>Tour Types</h2>
                <button className='btn btn-primary'>Add Tour Type</button>
            </div>
            <div className='border rounded-lg border-muted p-5'>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className='w-[100px]'>Name</TableHead>
                            <TableHead className='text-right'>Action</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {data?.data?.map(
                            (item: { name: string }, index: number) => (
                                <TableRow key={index}>
                                    <TableCell className='font-medium w-full'>
                                        {item.name}
                                    </TableCell>
                                    <TableCell className='text-right'>
                                        <button className='text-red-500'>
                                            Delete <Trash className='inline' />
                                        </button>
                                    </TableCell>
                                </TableRow>
                            )
                        )}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
};

export default AddTourType;
