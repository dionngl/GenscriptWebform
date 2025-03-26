from rest_framework import serializers
from .models import GenscriptEntry

class GenscriptEntrySerializer(serializers.ModelSerializer):
    class Meta:
        model = GenscriptEntry
        fields = ('id', 'protein_name', 'uniprot_id', 'residue_index', 'amino_sequence', 'dna_sequence')

class CreateGenscriptEntrySerializer(serializers.ModelSerializer):
    class Meta:
        model = GenscriptEntry
        fields = ('protein_name', 'uniprot_id', 'residue_index', 'amino_sequence', 'dna_sequence')