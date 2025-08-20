import { Trash2 } from 'lucide-react';
import { toast } from 'sonner';
import { DeleteConfirmation } from '../../components/DeleteConfirmation';
import { Button } from '../../components/ui/button';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '../../components/ui/table';
import {
    useGetTourTypesQuery,
    useRemoveTourTypeMutation,
} from '../../redux/features/tour/tour.api';

const AddTourType = () => {
    const { data } = useGetTourTypesQuery(undefined);
    const [removeTourType] = useRemoveTourTypeMutation();

    const handleRemoveTourType = async (tourTypeId: string) => {
        const toastId = toast.loading('Removing tour type...');
        try {
            const res = await removeTourType(tourTypeId).unwrap();
            console.log('Tour type removed successfully');
            if (res.success) {
                toast.success('Tour type removed successfully', {
                    id: toastId,
                });
            }
        } catch (error) {
            console.error('Failed to remove tour type:', error);
        }
    };

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
                            (
                                item: { _id: string; name: string },
                                index: number
                            ) => (
                                <TableRow key={index}>
                                    <TableCell className='font-medium w-full'>
                                        {item.name}
                                    </TableCell>
                                    <TableCell className='text-right'>
                                        <DeleteConfirmation
                                            onConfirm={() => {
                                                handleRemoveTourType(item._id);
                                            }}
                                        >
                                            <Button
                                                size={'sm'}
                                                variant='outline'
                                            >
                                                <Trash2 />
                                            </Button>
                                        </DeleteConfirmation>
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
