from django.shortcuts import render
from rest_framework import generics, status
from api.serializer import *
from api.models import GenscriptEntry
from django.http import HttpResponse
from rest_framework.views import APIView
from rest_framework.response import Response
# Create your views here.

class GenscriptEntryView(generics.CreateAPIView):
    queryset = GenscriptEntry.objects.all()
    serializer_class = GenscriptEntrySerializer

class CreateGenscriptEntryView(APIView):
    serializer_class = CreateGenscriptEntrySerializer

    def post(self, request, format=None):

        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            protein_name = serializer.data.get('protein_name')
            uniprot_id = serializer.data.get('uniprot_id')
            residue_index = serializer.data.get('residue_index')
            amino_sequence = serializer.data.get('amino_sequence')
            dna_sequence = serializer.data.get('dna_sequence')
            genscriptentry = GenscriptEntry(protein_name=protein_name, uniprot_id=uniprot_id, residue_index=residue_index,
                                            amino_sequence=amino_sequence, dna_sequence=dna_sequence)
            genscriptentry.save()
        return Response(GenscriptEntrySerializer(genscriptentry).data, status=status.HTTP_201_CREATED)

def main(request):
    return HttpResponse("Hello World")